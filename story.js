export const story = {
    start: {
        intro: `In Los Angeles California, ${playerName} is an adult who is an illegal candy vendor along with friends. They do this because their family kicked them out of their home and is flat broke and needs the money in this new unfamiliar place. New to the scene, connections with ${connections}, so it’s harder on the uprise but ${playerName} starts with no heat. No money, no nothing, just guidance and ambition. Their hideout is based in an average suburban home where they illegally produce their candy. One day, the SGA (Sucrose and Glucose Administration) for their unlicensed candy production, conducts a raid on their hideout. ${playerName} escapes but their peers are caught and are now alone in the big city of Los Angeles.`,
        choice: [`Starting a new production with your other friends`, `Start a new production on your own`, `Lay low for a while`]
    },
   

    jessieStart: {
       text: `Your name is Jessie. You grew up scrappy — always the one who figured things out when no one else would. You've been crashing on a park bench in Koreatown for three nights now, living off vending machine chips and sheer stubbornness. You pull out a crumpled twenty — your last one — and stare at it. The candy game was the only thing keeping you going. Your old supplier ghosted you after the raid, and the people who knew your product are now whispering that "Purleman's operation is dead."\n\nYou overhear two street vendors arguing nearby. One of them drops a bag of contraband gummy bears and walks off furious. You eye the bag.`,
       choice: ['Pick up the bag and sell it yourself to get seed money', 'Ignore it and look for a legit part-time job to fund a fresh start', 'Follow the angry vendor -- maybe he knows the underground candy market'],
       idsForChoices: ['jessieHustle', 'jessieLegit', 'jessieFollow']
    },


    jessieHustle: {
        text: `You scoop the bag and spend the afternoon working the park near the Staples Center. You've got the pitch down — you always did. By sundown you've tripled your twenty. It's not enough to restart a real operation, but it's proof you still have the gift. You're heading back to your bench when you pass an alley and smell something familiar — sugar, citric acid, the sharp pop of carbon dioxide candy. Someone nearby is still cooking.\n\nYou slow your steps. This could be a connect — or a competitor.`,
        choice: ['Invesitgate the smell', 'Keep walking -- stay off the radar for now'],
        idsForChoices: ['jessieAlley', 'jessieLayLow']
    },


    jessieLegit: {
        text: `You land a two-day shift washing dishes at a taco spot on Vermont Ave. It's humbling, but you keep your head down and pocket $180. On your second night, the owner's kid — maybe 16 — slides up to you and whispers that he's heard of Purleman's pop rocks. Says the kids at his school are obsessed and want to know if production is ever coming back. Word travels fast in this city.\n\nYour cover is already blown, even when you're trying to lay low.`,
        choice: ['Tell the kid you\'re done with life', 'Tell the kid to spread the word Purpleman is back soon'],
        idsForChoices: ['jessieLayLow', 'jessieAlley']

    },


    jessieFollow: {
        text: `You tail the vendor six blocks into a strip mall parking lot. He meets with two others and they exchange cash for a duffel bag. You watch long enough to realize this isn't your league — not yet. But as you turn to leave, a woman locks eyes with you. She's mid-40s, sharp, with the kind of stillness that comes from years of knowing when to move and when not to. She says one thing: "You're Purleman's, aren't you. The one that got away."\n\nShe walks off before you can respond. But she drops a napkin with an address.`,
        choice: ['Go to the address', 'Throw it away -- strangers with information are dangerous'],
        idsForChoices: ['jessieAlley', 'jessieLayLow']
    },


    jessieLayLow: {
        text: `You spend a week keeping your head down. You eat cheap, sleep wherever you can, and watch the neighborhood. The heat from the raid begins to cool. The SGA's surveillance vans stop circling your old block. You feel the familiar itch — the city is still hungry for your product. And you've learned enough about laying low to know when to move again.\n\nYou're ready to start cooking on your own.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind']
    },


    jessieAlley: {
        text: `You follow your nose into the alley. Behind a dumpster, an old fold-up table holds a single hot plate, a candy thermometer, and bags of sugar and citric acid. Nobody's here — whoever was cooking left in a hurry. Or is watching you right now.\n\nYou sit down, use what's left on the table, and produce a small batch of pop rocks just to prove you still can. They're good. Really good. But you're alone, underfunded, and exposed.\n\nYou need to restart properly.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind']
    },

    //This is where Jesus / Juanitia story starts

    jesusjuanitaStart: {
        text: `Your name is Jesus — or Juanita, depending on who's asking. You've always moved between worlds without belonging to any of them, which made you the crew's best front person. Charm, fluency in three languages, and a face nobody forgets. When the SGA hit the house, you were the last one out the back window. You landed on your feet. You always do.\n\nNow you're in Boyle Heights, sleeping on a cousin's couch, too proud to explain why you showed up with nothing. Your cousin asks no questions. The neighborhood, though — it knows things. The corner store owner keeps giving you looks. The kids on the block stop talking when you pass.`,
        choice: ['Ask the corner store owner what he knows', 'Keep your head down at your cousin\'s and plan your next move', 'Work the neighborhood -- introduce yourself, make connections'],
        idsForChoices: ['jesusjuanitaStoreOwner', 'jesusjuanitaCousin', 'jesusjuanitaNetwork']
    },


    jesusjuanitaStoreOwner: {
        text: `he store owner, Mr. Castillo, is 60-something and has seen everything. Over a Jarritos he tells you the SGA has been expanding — more raids, more plainclothes agents in East LA. But he also says the demand for unlicensed candy has never been higher. "The kids," he says, shaking his head. "They want what they can't have."\n\nHe slides you a name on a receipt: someone who might need a new supplier contact. It's a long shot, but it's a thread.`,
        choice: ['Folllow up on the name', 'Thank him and plan your next move independently'],
        idsForChoices: ['jesusjuanitaNetwork', 'jesusjunaitaCousin']
    },


    jesusjuanitaCousin: {
        text: `You spend three days on your cousin's couch, filling notebooks with plans. Supply chain. Distribution routes. Safe house requirements. You've done this before — but smarter this time. By day four you have a blueprint for a lean operation. Small, quiet, profitable.\n\nThe only thing missing is a production partner. You can source and sell — you always could. But the cooking? That was always someone else's lane.`,
        choice: ['Try to cook solo anyway', 'Reach out through the neighborhood for a connect'],
        idsForChoices: ['jesusjuanitaNetwork', 'soloGrind']
    },


    jesusjuanitaNetwork: {
        text: `You spend a week reintroducing yourself to the neighborhood ecosystem. Not as a candy vendor — just as someone who's around, who listens, who helps where they can. You fix a lady's phone. You translate at a lease signing. You play dominoes with the old men at the park.\n\nBy the end of the week, three different people have quietly asked if Purleman's product is coming back. The market is waiting. You just need to supply it.\n\nTime to cook — or find someone who can.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind']
    },

    //Rei story pathway
    reiStart: {
        text: `Your name is Rei. You were always the technical one — the one who perfected the recipes, calibrated the temperatures, tracked the batch quality. When the SGA hit, you were in the middle of a cook. You barely grabbed your notebook before running. That notebook — filled with formulas, ratios, and notes in the margins — is the only thing you have left.\n\nYou've found a temporary room in a hostel in Silver Lake. It's clean and anonymous. You sit on the bed and open the notebook. You could recreate everything. Better, even. But without the crew, without the resources, you're a brain with no body.`,
        choice: ['Post on underground forums for collaborators', 'Try to source ingredients and cook a small test batch alone', 'Reach out to your old ingredient supplier'],
        idsForChoices: ['reiForum', 'reiCook', 'reiSupplier']
    },


    reiForum: {
       text: `You find a niche forum on the dark corners of the web where unlicensed food producers share knowledge. You post carefully — vague enough to not expose yourself, specific enough to attract real talent. Within 48 hours you get three responses. Two are junk. One is from someone who calls themselves "W.B.B." who says they have culinary training and are looking for a technical partner.\n\nYou file it away for now. Something about the tone feels serious.`,
         choice: ['Reply to W.B.B.', 'Try producing a test batch on your own first'],
        idsForChoices: ['reiCook', 'soloGrind']
    },


    reiSupplier: {
        text: `You contact your old ingredient supplier through an encrypted message. He's nervous — the SGA crackdown spooked a lot of people. But he confirms he can still source what you need, at a premium. He also mentions that someone else has been asking about high-grade candy ingredients in the area. A teacher, apparently. Culinary background.\n\nA teacher. That's an odd detail that sticks with you.`,
        choice: ['Ask more about the teacher', 'Order supplies and start a solo test batch'],
        idsForChoices: ['reiCook', 'soloGrind']
    },


    reiCook: {
        text: `You source a small amount of ingredients and convert the hostel bathroom into a micro-lab for one night. Using your notebook, you produce a flawless small batch. The crystals form perfectly. The pop is clean and sharp. The flavor is better than anything the crew ever made.\n\nBut you're producing maybe 40 units a night by yourself. That's not a business — that's a hobby. You need scale. You need a partner. And one night, while you're packaging your batch in the hostel parking lot, someone walks up out of the dark and says your name.`,
        choice: ['Turn around'],
        idsForChoices: ['soloGrind']
    },

    //Where the different starts merge
    soloGrind: {
        text: `Alone and under-resourced, you start producing — small batches, late nights, moving locations every few days to stay off the SGA's radar. The product is decent but inconsistent without the full crew. Sales trickle. It's enough to eat, barely enough to keep going. You're a one-person operation in a city that rewards scale.\n\nWeeks pass. Then one night, after finishing a batch of pop rocks in the back of a rented storage unit, you hear footsteps outside. You freeze. The footsteps slow. A knock on the door — three taps, measured and deliberate. Not SGA. They don't knock.`,
        choice: ['Open the door', 'Slip out the back'],
        idsForChoices: ['williamReveal', 'williamReveal']
    },


    williamReveal: {
        text: `Standing in the doorway — or catching up to you in the alley if you tried to run — is a man you haven't thought about in years. William "Bob" Black. Your old culinary teacher. He's older, a little worn, but his eyes are the same: sharp, warm, always calculating the best way to explain something.\n\nHe holds up both hands. "I'm not SGA. I'm not anyone's informant. I teach 9th and 10th graders at Wadiya High now." He pauses. "And I'm broke, I'm sick, and I need money for treatment for a chronic cortisol condition that's eating me alive."\n\nHe steps forward. "I heard you were still out here. I know candy production. Real culinary-grade formulation. You know the market. I think you know what I'm about to propose."`,
        choice: ['Accept William\'s offer', 'Reject William\'s offer', 'Work at Sooubway instead'],
        idsForChoices: ['williamAccept', 'williamReject', 'sooubwayEnd']
    },


    williamReject: {
        text: `You tell William no. You appreciate the honesty, but bringing in a partner — especially one with no street experience — feels like a liability. You wish him well and send him off. He nods slowly, like he expected it.\n\nYou go back to the grind alone. The product stays inconsistent. The money stays thin. Three weeks later, you cross paths with William at a gas station. He looks worse. You look tired. Neither of you says anything for a long moment.\n\nFinally, he says: "The offer still stands. But it won't for much longer."`,
        choice: ['Accept William\'s offer this time', 'Keep refusing and continue solo'],
        idsForChoices: ['williamAccept', 'grindFail']
    },


    grindFail: {
        text: `You push on alone. The inconsistency in your batches starts costing you customers. A rival operation moves into your distribution spots. You're running out of money faster than you're making it, and the isolation is wearing you down.\n\nYou get a call from an unknown number. It's one of your old crew members, calling from inside. "Get help," they say. "You can't do this alone. You never could." The line goes dead.\n\nYou sit in the dark for a long time. Then you pull out William Black's number.`,
        choice: ['Call William'],
        idsForChoices: ['williamAccept']
    },

    //william comes into play
    williamAccept: {
        text: `You shake on it. William moves his sparse belongings into a corner of whatever space you're using and gets to work immediately. Within 48 hours you understand what you've been missing. He doesn't just cook — he engineers. He adjusts pH levels, controls crystallization rates, layers flavor compounds in ways that make your best previous batches taste like prototypes.\n\nThe product becomes something else entirely. People start talking. Your regulars are telling other people. Demand is building quietly, steadily. For the first time since the raid, it feels like something real is happening.\n\nThen comes the cooking session that changes everything.`,
        choice: ['Begin the cooking session'],
        idsForChoices: ['minigameCooking']
    },

    minigameCooking: {
        text: `[MINIGAME: CANDY COOK] William walks you through the process — temperature windows, timing, the exact moment to pull from heat. Your decisions here affect the batch quality and your reputation score. Produce a perfect batch and the next chapter opens with high credibility. Rush it or misjudge, and you'll have to rebuild trust.\n\nAfter the session, you box up your best batch yet and put it out into the market.`,
        choice: ['Ship the batch and wait for results'],
        idsForChoices: ['dealerApproach'],
        minigame: 'cooking'
    },


    dealerApproach: {
        text: `Word spreads fast. Three days after your best batch hits the streets, a man shows up at your location. He didn't knock — he was just suddenly inside, sitting in a chair, eating one of your pop rocks with the practiced calm of someone used to being the most dangerous person in any room.\n\nHis name is Cord. He's a distributor with reach you can't imagine — he mentions Agartha, an underground mass production facility outside the city. He wants you and William. He wants your product at industrial scale. He slides a paper across the table with a number on it.\n\nThe number is enormous.`,
        choice: ['Reject Cord\'s offer', 'Accept Cord\'s offer', 'Try to negotiate terms'],
        idsForChoices: ['dealerReject', 'dealerAccept', 'dealerNegotiate']
    },


    dealerNegotiate: {
        text: `You try to negotiate. You lay out your terms — you keep the recipe proprietary, you maintain creative control over quality, you want a percentage rather than a flat wage. Cord listens. He's almost amused.\n\nThen he leans forward. "This isn't a negotiation. I'm here out of courtesy. I could take what I need from you without this conversation." He lets that sit in the air for exactly three seconds. "My offer stands. Take it or don't. But understand that 'don't' has consequences."`,
        choice: ['Persist with your terms', 'Back down anf accept his offer', 'Reject outright'],
        idsForChoices: ['dealerPersist', 'dealerAccept', 'dealerReject']
    }
}



