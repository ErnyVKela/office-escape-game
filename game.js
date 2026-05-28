const sceneText = document.getElementById("scene-text");
const choicesDiv = document.getElementById("choices");

let player = {
  stress: 20,
  flow: 100,
  inventory: [],
  flags: {}
};

function updateStats() {

    document.getElementById("stress").innerText = player.stress; 
    document.getElementById("caffeine").innerText = player.flow;
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = "";
    player.inventory.forEach(function(item) { 
        const li = document.createElement("li");
        li.innerText = "• " + item;
        inventoryList.appendChild(li);

});
}

function typeWriter(text, index = 0) {

  if (index < text.length) {

    sceneText.innerHTML += text.charAt(index);

    setTimeout(() => {
      typeWriter(text, index + 1);
    }, 15);

  }

}

function hasItem(itemName) {
  return player.inventory.includes(itemName);
}

function hasAllItems(items) {
  return items.every(hasItem);
}

function hasAnyItems(items) {
  return items.some(hasItem);
}

function canUseChoice(choice) {
  if (choice.requiresItems && !hasAllItems(choice.requiresItems)) {
    return false;
  }

  if (choice.requiresAnyItems && !hasAnyItems(choice.requiresAnyItems)) {
    return false;
  }

  return true;
}

function resolveNextScene(choice) {
  if (choice.conditionalNext && Array.isArray(choice.conditionalNext)) {
    for (const rule of choice.conditionalNext) {
      if (rule.requiresItems && !hasAllItems(rule.requiresItems)) {
        continue;
      }

      if (rule.requiresAnyItems && !hasAnyItems(rule.requiresAnyItems)) {
        continue;
      }

      return rule.next;
    }
  }

  return choice.next;
}

function loadScene(sceneName) {

  const scene = window.scenes[sceneName];

  if (!scene) {
    sceneText.innerText = "Scene not found.";
    return;
  }

  sceneText.innerHTML = "";

  document.getElementById("portrait").src = scene.portrait; 
  document.getElementById("character-name").innerText = scene.character;

  const sceneTextContent =
    typeof scene.text === "function" ? scene.text(player) : scene.text;

  typeWriter(sceneTextContent);

  choicesDiv.innerHTML = "";

  scene.choices.forEach(function(choice) {
    if (!canUseChoice(choice) && choice.hideIfMissing) {
      return;
    }

    const button = document.createElement("button");

    const choiceAvailable = canUseChoice(choice);

    if (choiceAvailable) {
      button.innerText = choice.text;
    } else {
      button.innerText = (choice.lockedText || choice.text + " [LOCKED]");
      button.disabled = true;
      button.title = choice.missingHint || "Requirements not met.";
    }

    button.onclick = function() {
      if (!choiceAvailable) {
        return;
      }

      if (choice.stress) {
        player.stress += choice.stress;
      }

      if (choice.flow) {
        player.flow += choice.flow;
      }

      if (choice.item) {
        if (!hasItem(choice.item)) {
          player.inventory.push(choice.item);
        }

        alert("ITEM ACQUIRED: " + choice.item);
      }

      if (choice.setFlag) {
        player.flags[choice.setFlag] = true;
      }

      if (player.stress >= 100) {
        loadScene("burnout");
        return;
      }

      updateStats();

      const nextScene = resolveNextScene(choice);
      loadScene(nextScene);

    };

    choicesDiv.appendChild(button);

  });

}

updateStats();

loadScene("start");