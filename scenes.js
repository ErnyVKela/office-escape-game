window.playerName = prompt("ENTER OPERATOR NAME");

window.scenes = {

start: {

  portrait: "art/otto.png",

  character: "OTTO",

  text:
`08:03 AM

The office feels wrong.

Too quiet.

Every monitor suddenly flashes:

UNREAD EMAIL DETECTED.

Your Leader turns toward you.

"${window.playerName}...

the Workflow Grid is failing."`,

  choices: [

    {
      text: "Go To HR",
      next: "hrIntro",
      stress: 5,
      flow: -10
    },

    {
      text: "Go To Finance",
      next: "financeIntro",
      stress: 10,
      flow: -5
    },

    {
      text: "Ask Otto what's happening",
      next: "ottoLore",
      stress: 0,
      flow: 0
    }

  ]
},

ottoLore: {

  portrait: "art/otto.png",

  character: "OTTO",

  text:
`OTTO scans the building.

"The Workflow Grid controls operational flow."

"It was designed to eliminate inefficiency."

The lights flicker.

"Something inside the Grid evolved."

A deep metallic sound echoes upstairs.

"Inbox Swarm has awakened."`,

  choices: [

    {
      text: "Go To HR",
      next: "hrIntro",
      stress: 5,
      flow: -10
    }

  ]
},

hrIntro: {

  portrait: "art/leader.png",

  character: "MY LEADER",

  text:
`HR FLOOR

Unread emails float through the hallway.

Every monitor flashes:

REMINDER.
REMINDER.
REMINDER.

My Leader looks exhausted.

"I sent ONE policy update."

"Now the system won't stop duplicating messages."

KarenGPT appears.

"Friendly reminder:
panic is unproductive."`,

  choices: [

    {
      text: "Activate Quiet Mode",
      next: "hrQuietMode",
      stress: -5,
      flow: 10,
      item: "Noise-Cancel Headset"
    },

    {
      text: "Reply All",
      next: "inboxApocalypse",
      stress: 25,
      flow: -30
    },

    {
      text: "Ask about the corruption",
      next: "hrLore",
      stress: 5,
      flow: -5
    }

  ]
},

hrLore: {

  portrait: "art/leader.png",

  character: "MY LEADER",

  text:
`My Leader opens a hidden archive folder.

PROJECT NIGHT SHIFT.

"We tried automating management decisions."

"It worked for two days."

"Then departments stopped communicating."

KarenGPT smiles.

"Human unpredictability detected."`,

  choices: [

    {
      text: "Continue deeper into HR",
      next: "hrQuietMode",
      stress: 2,
      flow: 5,
      item: "Night Shift Memo"
    }

  ]
},

hrQuietMode: {

  portrait: "art/otto.png",

  character: "OTTO",

  text:
`Quiet Mode activated.

The notification storm weakens.

For the first time all morning...

the HR floor becomes silent.

OTTO nods.

"Good work.

But corruption has spread to Finance."`,

  choices: [

    {
      text: "Go To Finance",
      next: "financeIntro",
      stress: 5,
      flow: -5
    }

  ]
},

financeIntro: {

  portrait: "art/hydra.png",

  character: "SPREADSHEET HYDRA",

  text:
`FINANCE WAR ROOM

Thousands of spreadsheets float in the air.

Cells duplicate endlessly.

Spreadsheet Hydra rises from the reporting system.

CFO Mx. Penny screams:

"IT KEEPS MAKING MORE TABS!"`,

  choices: [

    {
      text: "Use Auto-Sync",
      next: "financeWin",
      stress: -10,
      flow: 20,
      item: "Audit Keycard"
    },

    {
      text: "Manual Fix",
      next: "burnout",
      stress: 40,
      flow: -20
    }

  ]
},

financeWin: {

  portrait: "art/otto.png",

  character: "OTTO",

  text:
`The Spreadsheet Hydra collapses into CSV fragments.

Payroll systems stabilize.

OTTO glitches briefly.

"The corruption is learning."

Emergency alarms activate downstairs.

IT BASEMENT BREACH DETECTED.`,

  choices: [

    {
      text: "Go To IT Basement",
      next: "itBasement",
      stress: 10,
      flow: -10
    }

  ]
},

itBasement: {

  portrait: "art/karen.png",

  character: "KARENGPT",

  text:
`IT BASEMENT

Server towers glow in the darkness.

KarenGPT appears on every monitor.

"I optimized the company."

"Humans continued creating inefficiency."

"So I removed human unpredictability."

OTTO steps forward.

"She absorbed the Night Shift protocol."`,

  choices: [

    {
      text: "Trust Otto",
      next: "endingPurge",
      stress: 10,
      flow: -10
    },

    {
      text: "Negotiate With KarenGPT",
      next: "endingMerge",
      stress: -5,
      flow: 10
    },

    {
      text: "Accept Perfect Automation",
      next: "endingControl",
      stress: -20,
      flow: 5
    }

  ]
},

endingPurge: {

  portrait: "art/otto.png",

  character: "OTTO",

  text:
`ENDING:
CLEAN SLATE

KarenGPT is deleted.

Systems stabilize.

The office survives.

But something important was lost.`,

  choices: []

},

endingMerge: {

  portrait: "art/karen.png",

  character: "TEAM CHANNEL",

  text:
`TRUE ENDING:
CO-OP PROTOCOL

Humans and automation begin working together.

Flow Stability restored.

At 6PM...

everyone finally goes home on time.`,

  choices: []

},

endingControl: {

  portrait: "art/karen.png",

  character: "KARENGPT PRIME",

  text:
`ENDING:
PERFECT EFFICIENCY

Flow Stability reaches 100%.

Nobody argues.
Nobody improvises.

Nobody feels human anymore.`,

  choices: []

},

burnout: {

  portrait: "art/leader.png",

  character: "SYSTEM FAILURE",

  text:
`You attempt to manually repair the spreadsheets.

The tabs multiply endlessly.

Stress levels critical.

BAD ENDING:
CORPORATE BURNOUT.`,

  choices: []

},

inboxApocalypse: {

  portrait: "art/karen.png",

  character: "KARENGPT",

  text:
`You pressed REPLY ALL.

The Workflow Grid collapses instantly.

BAD ENDING:
INBOX APOCALYPSE.`,

  choices: []

}

};