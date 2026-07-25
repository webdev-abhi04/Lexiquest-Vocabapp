


// LexiQuest Word Database — 2000+ words
// Format: { word, pos, correct, options:[wrong1,wrong2,wrong3], level, example }

const BUILTIN_WORDS = [
// ═══════════════ EASY LEVEL ═══════════════
{word:"Happy",pos:"adjective",correct:"Feeling or showing pleasure or contentment",options:["Feeling sad or gloomy","Extremely tired","Very angry"],level:"easy",example:"She felt happy after receiving the good news."},
{word:"Brave",pos:"adjective",correct:"Ready to face danger without fear",options:["Easily frightened","Very lazy","Extremely careless"],level:"easy",example:"The brave firefighter entered the burning building."},
{word:"Kind",pos:"adjective",correct:"Friendly and generous in nature",options:["Cruel and harsh","Distant and cold","Loud and aggressive"],level:"easy",example:"She was kind enough to help the lost tourist."},
{word:"Angry",pos:"adjective",correct:"Feeling strong displeasure or hostility",options:["Feeling content and peaceful","Feeling very sleepy","Feeling generous"],level:"easy",example:"He was angry when his car broke down."},
{word:"Curious",pos:"adjective",correct:"Eager to learn or know something",options:["Completely uninterested","Feeling afraid","Very hungry"],level:"easy",example:"The curious child asked many questions."},
{word:"Bright",pos:"adjective",correct:"Giving out or reflecting much light",options:["Completely dark and dull","Very heavy","Making loud sounds"],level:"easy",example:"The bright sun lit up the room."},
{word:"Tiny",pos:"adjective",correct:"Very small in size",options:["Extremely large","Very loud","Very fast"],level:"easy",example:"A tiny ant carried a grain of sugar."},
{word:"Fast",pos:"adjective",correct:"Moving or able to move at high speed",options:["Moving very slowly","Standing completely still","Growing sideways"],level:"easy",example:"The fast runner finished first."},
{word:"Honest",pos:"adjective",correct:"Truthful and free from deceit",options:["Regularly telling lies","Easily confused","Very forgetful"],level:"easy",example:"She was always honest about her feelings."},
{word:"Gentle",pos:"adjective",correct:"Mild in manner or disposition; not harsh",options:["Violent and rough","Extremely noisy","Extremely tall"],level:"easy",example:"Be gentle with the newborn kitten."},
{word:"Lazy",pos:"adjective",correct:"Unwilling to work or use energy",options:["Extremely hardworking","Very creative","Overly talkative"],level:"easy",example:"He was too lazy to clean his room."},
{word:"Noisy",pos:"adjective",correct:"Making or characterized by loud sounds",options:["Completely silent","Very dark","Very slow"],level:"easy",example:"The noisy crowd cheered for the team."},
{word:"Calm",pos:"adjective",correct:"Free from excitement or agitation; peaceful",options:["Very excited and frantic","Extremely loud","Very dark"],level:"easy",example:"She remained calm during the storm."},
{word:"Weak",pos:"adjective",correct:"Lacking physical strength or power",options:["Having great physical strength","Very intelligent","Extremely fast"],level:"easy",example:"He felt weak after being sick."},
{word:"Sharp",pos:"adjective",correct:"Having a thin cutting edge or fine point",options:["Blunt and dull","Very round","Extremely soft"],level:"easy",example:"Use the sharp knife carefully."},
{word:"Dirty",pos:"adjective",correct:"Covered or marked with an unclean substance",options:["Perfectly clean and spotless","Very bright","Extremely cold"],level:"easy",example:"His dirty boots left marks on the floor."},
{word:"Fresh",pos:"adjective",correct:"Recently made or obtained; not stale",options:["Old and spoiled","Very dry","Extremely hot"],level:"easy",example:"We bought fresh bread from the bakery."},
{word:"Clever",pos:"adjective",correct:"Quick to understand and learn things",options:["Slow to understand things","Very strong physically","Extremely tall"],level:"easy",example:"The clever student solved the puzzle quickly."},
{word:"Loud",pos:"adjective",correct:"Producing much noise; easily heard",options:["Making very little sound","Very bright","Moving quickly"],level:"easy",example:"The loud music woke up the neighbors."},
{word:"Thin",pos:"adjective",correct:"Of small thickness or width",options:["Very wide and thick","Extremely tall","Very loud"],level:"easy",example:"She cut a thin slice of bread."},
{word:"Simple",pos:"adjective",correct:"Easily understood or done; not complex",options:["Very complicated and difficult","Extremely large","Very fast"],level:"easy",example:"The instructions were simple to follow."},
{word:"Wet",pos:"adjective",correct:"Covered or saturated with water or liquid",options:["Completely dry","Extremely hot","Very bright"],level:"easy",example:"My shoes got wet in the rain."},
{word:"Old",pos:"adjective",correct:"Having lived or existed for a long time",options:["Very recently born or made","Extremely fast","Very bright"],level:"easy",example:"She loved the old books in the library."},
{word:"Young",pos:"adjective",correct:"Having lived or existed for only a short time",options:["Very old and aged","Extremely large","Very loud"],level:"easy",example:"Young children love to play."},
{word:"Dry",pos:"adjective",correct:"Free from moisture or liquid",options:["Completely wet and soaked","Very bright","Extremely cold"],level:"easy",example:"The desert air is very dry."},
{word:"Cold",pos:"adjective",correct:"Of or at a low temperature",options:["Very hot and warm","Extremely bright","Very loud"],level:"easy",example:"She wrapped herself in a blanket on the cold night."},
{word:"Hot",pos:"adjective",correct:"Having a high temperature",options:["Very cold and freezing","Extremely dark","Very quiet"],level:"easy",example:"The hot soup burned my tongue."},
{word:"Wide",pos:"adjective",correct:"Measuring a large amount from side to side",options:["Very narrow and slim","Extremely tall","Very loud"],level:"easy",example:"The wide river took hours to cross."},
{word:"Rich",pos:"adjective",correct:"Having a great deal of money or assets",options:["Having very little money","Extremely thin","Very quiet"],level:"easy",example:"The rich merchant owned many shops."},
{word:"Poor",pos:"adjective",correct:"Lacking sufficient money; in need",options:["Having great wealth","Extremely fast","Very bright"],level:"easy",example:"She helped the poor family with food."},
{word:"Sick",pos:"adjective",correct:"Affected by physical illness",options:["In perfect health","Extremely strong","Very happy"],level:"easy",example:"He stayed home because he was sick."},
{word:"Safe",pos:"adjective",correct:"Protected from or not exposed to danger",options:["In great danger","Very fast","Extremely dark"],level:"easy",example:"The children were safe inside the house."},
{word:"Sweet",pos:"adjective",correct:"Having the pleasant taste characteristic of sugar",options:["Having a very bitter taste","Extremely sour","Very salty"],level:"easy",example:"She loves sweet strawberries."},
{word:"Soft",pos:"adjective",correct:"Easy to mold, cut, or compress; not hard",options:["Very hard and firm","Extremely loud","Very fast"],level:"easy",example:"The soft pillow was very comfortable."},
{word:"Hard",pos:"adjective",correct:"Solid, firm, and rigid; not easy to break",options:["Soft and easy to bend","Very quiet","Extremely cold"],level:"easy",example:"The diamond is a hard mineral."},
{word:"Lost",pos:"adjective",correct:"Unable to find one's way; not knowing where you are",options:["Knowing exactly where you are","Extremely happy","Very fast"],level:"easy",example:"They were lost in the dark forest."},
{word:"Found",pos:"verb",correct:"Discovered or located after being lost",options:["Hid or concealed something","Ran away quickly","Broke into pieces"],level:"easy",example:"She found her missing keys under the sofa."},
{word:"Jump",pos:"verb",correct:"Push yourself off the ground into the air",options:["Sink slowly into water","Sleep very deeply","Eat food slowly"],level:"easy",example:"The children love to jump on trampolines."},
{word:"Run",pos:"verb",correct:"Move at a speed faster than walking",options:["Stand completely still","Float in the air","Sink into the ground"],level:"easy",example:"He runs every morning for exercise."},
{word:"Sleep",pos:"verb",correct:"Rest in a state of unconsciousness",options:["Be wide awake and alert","Run at high speed","Eat a large meal"],level:"easy",example:"Most people sleep for about 8 hours."},
{word:"Eat",pos:"verb",correct:"Put food in your mouth, chew, and swallow",options:["Breathe in air only","Float through the air","Dig into the ground"],level:"easy",example:"We eat dinner together as a family."},
{word:"Sing",pos:"verb",correct:"Make musical sounds with your voice",options:["Make complete silence","Dig into the ground","Jump off a surface"],level:"easy",example:"She likes to sing in the shower."},
{word:"Write",pos:"verb",correct:"Mark letters or words on a surface",options:["Erase marks from a surface","Jump up and down","Make sounds with your voice"],level:"easy",example:"Please write your name on the paper."},
{word:"Read",pos:"verb",correct:"Look at and understand written words",options:["Ignore written words","Draw pictures only","Sing songs aloud"],level:"easy",example:"I love to read books before bed."},
{word:"Think",pos:"verb",correct:"Use your mind to form ideas or opinions",options:["Stop all mental activity","Run away from ideas","Sleep deeply"],level:"easy",example:"Think carefully before answering."},
{word:"Smile",pos:"verb",correct:"Form a pleased, happy expression on your face",options:["Show sadness through tears","Run very quickly","Make a loud noise"],level:"easy",example:"She smiled at the funny joke."},
{word:"Small",pos:"adjective",correct:"Of limited size; not large",options:["Enormous in size","Very loud","Extremely fast"],level:"easy",example:"A small puppy fit in her palm."},
{word:"Big",pos:"adjective",correct:"Of considerable size, extent, or intensity",options:["Extremely small and tiny","Very quiet","Moving slowly"],level:"easy",example:"They moved into a big house."},
{word:"Dark",pos:"adjective",correct:"Having little or no light",options:["Filled with bright light","Very loud","Extremely fast"],level:"easy",example:"It was too dark to see inside."},
{word:"Light",pos:"adjective",correct:"Having a considerable amount of light; not dark",options:["Completely dark and shadowy","Very heavy","Extremely slow"],level:"easy",example:"The room was light and airy."},
{word:"New",pos:"adjective",correct:"Recently made, produced, or acquired",options:["Very old and ancient","Extremely loud","Very dark"],level:"easy",example:"She bought a new phone today."},
{word:"Clean",pos:"adjective",correct:"Free from dirt, marks, or mess",options:["Covered in filth and dirt","Extremely noisy","Very dark"],level:"easy",example:"The clean kitchen smelled fresh."},
{word:"Beautiful",pos:"adjective",correct:"Pleasing to the senses or mind",options:["Ugly and unattractive","Very loud","Extremely cold"],level:"easy",example:"The garden was filled with beautiful flowers."},
{word:"Ugly",pos:"adjective",correct:"Unpleasant or repulsive in appearance",options:["Very pleasing to look at","Extremely fast","Very loud"],level:"easy",example:"The ugly duckling grew into a beautiful swan."},
{word:"Smart",pos:"adjective",correct:"Having or showing quick intelligence",options:["Lacking intelligence","Very slow physically","Extremely loud"],level:"easy",example:"She is a very smart student."},
{word:"Funny",pos:"adjective",correct:"Causing laughter or amusement",options:["Extremely dull and boring","Very frightening","Deeply sad"],level:"easy",example:"The funny clown made everyone laugh."},
{word:"Sad",pos:"adjective",correct:"Feeling or showing sorrow; unhappy",options:["Feeling great joy","Very energetic","Extremely strong"],level:"easy",example:"He was sad when his pet died."},
{word:"Scared",pos:"adjective",correct:"Feeling fear or anxiety",options:["Feeling completely fearless","Very happy","Extremely lazy"],level:"easy",example:"She was scared of the loud thunder."},
{word:"Tired",pos:"adjective",correct:"In need of rest or sleep; weary",options:["Full of energy and excitement","Extremely fast","Very bright"],level:"easy",example:"After hiking all day, he was very tired."},
{word:"Hungry",pos:"adjective",correct:"Feeling a need or desire to eat",options:["Feeling completely full","Very thirsty","Extremely sleepy"],level:"easy",example:"The hungry children rushed to the kitchen."},
{word:"Thirsty",pos:"adjective",correct:"Feeling a need to drink something",options:["Feeling completely satisfied after drinking","Very hungry","Extremely tired"],level:"easy",example:"After running, she was very thirsty."},
{word:"Strong",pos:"adjective",correct:"Having the power to move heavy weights",options:["Very physically weak","Extremely quiet","Very slow"],level:"easy",example:"He is strong enough to lift heavy boxes."},
{word:"Tall",pos:"adjective",correct:"Of great or more than average height",options:["Very short in stature","Extremely loud","Very slow"],level:"easy",example:"He was tall enough to reach the shelf."},
{word:"Short",pos:"adjective",correct:"Of small height or stature",options:["Very tall and towering","Extremely loud","Very fast"],level:"easy",example:"She was too short to ride the roller coaster."},
{word:"Long",pos:"adjective",correct:"Measuring a great distance from end to end",options:["Very short in length","Extremely loud","Very heavy"],level:"easy",example:"She had long, flowing hair."},
{word:"Round",pos:"adjective",correct:"Shaped like a circle or sphere",options:["Having sharp corners and edges","Very flat","Extremely thin"],level:"easy",example:"The world is round like a ball."},
{word:"Heavy",pos:"adjective",correct:"Of great weight; difficult to lift",options:["Very light and easy to lift","Extremely fast","Very quiet"],level:"easy",example:"The heavy box was hard to carry."},
{word:"Quiet",pos:"adjective",correct:"Making little or no noise",options:["Extremely loud and noisy","Very fast","Extremely bright"],level:"easy",example:"The library must remain quiet."},
{word:"Open",pos:"adjective",correct:"Allowing access, passage, or view; not closed",options:["Firmly closed and shut","Very dark","Extremely loud"],level:"easy",example:"Leave the window open for fresh air."},
{word:"Closed",pos:"adjective",correct:"Not open; sealed or shut",options:["Wide open","Very bright","Extremely fast"],level:"easy",example:"The store was closed on Sundays."},
{word:"Slow",pos:"adjective",correct:"Moving or operating at a low speed",options:["Moving at very high speed","Extremely loud","Very bright"],level:"easy",example:"The slow turtle finally crossed the road."},
{word:"Easy",pos:"adjective",correct:"Achieved without great effort; not difficult",options:["Very difficult and challenging","Extremely loud","Very heavy"],level:"easy",example:"The first lesson was easy for everyone."},
{word:"Difficult",pos:"adjective",correct:"Needing much effort or skill to accomplish",options:["Very simple and easy","Extremely light","Very quiet"],level:"easy",example:"The math problem was difficult to solve."},
{word:"Good",pos:"adjective",correct:"To be desired or approved of; of high quality",options:["Of very poor quality","Extremely loud","Very cold"],level:"easy",example:"She did a good job on the project."},
{word:"Bad",pos:"adjective",correct:"Of poor quality; not as it should be",options:["Of high quality and excellence","Very bright","Extremely fast"],level:"easy",example:"The bad weather canceled the picnic."},
{word:"Right",pos:"adjective",correct:"Correct or true; in accordance with fact",options:["Incorrect or false","Very loud","Extremely dark"],level:"easy",example:"She got the right answer on the test."},
{word:"Wrong",pos:"adjective",correct:"Not correct or true; inaccurate",options:["Completely correct and accurate","Very bright","Extremely fast"],level:"easy",example:"He gave the wrong answer."},
{word:"Full",pos:"adjective",correct:"Containing or holding as much as possible",options:["Completely empty","Very bright","Extremely fast"],level:"easy",example:"The full glass of water spilled."},
{word:"Empty",pos:"adjective",correct:"Containing nothing; not filled",options:["Completely full to the brim","Very bright","Extremely loud"],level:"easy",example:"The empty box was thrown away."},
{word:"Abundant",pos:"adjective",correct:"Existing or available in large quantities; plentiful",options:["Very scarce and limited","Extremely loud","Completely hidden"],level:"moderate",example:"The valley had abundant rainfall."},
{word:"Eloquent",pos:"adjective",correct:"Fluent and persuasive in speaking or writing",options:["Unable to express oneself clearly","Extremely loud in manner","Very physically strong"],level:"moderate",example:"The eloquent speaker captivated the audience."},
{word:"Diligent",pos:"adjective",correct:"Showing steady, earnest effort and hard work",options:["Habitually lazy and careless","Extremely noisy","Very forgetful"],level:"moderate",example:"The diligent student studied every night."},
{word:"Frugal",pos:"adjective",correct:"Sparing or economical with money or food",options:["Extremely wasteful and extravagant","Very generous to a fault","Completely reckless with money"],level:"moderate",example:"She was frugal and saved a lot each month."},
{word:"Arrogant",pos:"adjective",correct:"Having an exaggerated sense of one's own importance",options:["Humble and modest in character","Extremely shy and reserved","Very kind to others"],level:"moderate",example:"His arrogant behavior annoyed everyone."},
{word:"Benevolent",pos:"adjective",correct:"Well-meaning and kindly; generous",options:["Deliberately cruel and unkind","Extremely greedy","Very self-centered"],level:"moderate",example:"The benevolent donor funded the school."},
{word:"Candid",pos:"adjective",correct:"Truthful and straightforward; frank",options:["Deliberately deceptive and dishonest","Very shy and indirect","Extremely evasive"],level:"moderate",example:"She gave a candid opinion about the plan."},
{word:"Devout",pos:"adjective",correct:"Having deep religious feeling or commitment",options:["Completely irreligious and faithless","Extremely worldly","Very materialistic"],level:"moderate",example:"The devout monk prayed at dawn every day."},
{word:"Eager",pos:"adjective",correct:"Keen to do or have something; enthusiastic",options:["Completely uninterested and apathetic","Very reluctant","Extremely hesitant"],level:"moderate",example:"She was eager to learn new skills."},
{word:"Feeble",pos:"adjective",correct:"Lacking physical strength; weak",options:["Extremely strong and powerful","Very loud","Completely energetic"],level:"moderate",example:"The feeble old man needed help walking."},
{word:"Gloomy",pos:"adjective",correct:"Dark or poorly lit; causing despondency",options:["Bright and cheerful in atmosphere","Very loud","Extremely warm"],level:"moderate",example:"The gloomy weather matched her sad mood."},
{word:"Harsh",pos:"adjective",correct:"Unpleasantly rough or jarring to the senses",options:["Very gentle and soothing","Completely quiet","Extremely soft"],level:"moderate",example:"The harsh winters made life difficult."},
{word:"Immense",pos:"adjective",correct:"Extremely large or great; huge",options:["Very tiny and insignificant","Completely quiet","Extremely thin"],level:"moderate",example:"The immense mountains towered over the valley."},
{word:"Jovial",pos:"adjective",correct:"Cheerful and friendly; good-humored",options:["Very gloomy and morose","Extremely cold","Deeply serious at all times"],level:"moderate",example:"His jovial laugh filled the room with joy."},
{word:"Keen",pos:"adjective",correct:"Having or showing eagerness or enthusiasm",options:["Completely indifferent and uninterested","Very slow","Extremely dull"],level:"moderate",example:"She was keen on learning the guitar."},
{word:"Lenient",pos:"adjective",correct:"More merciful or tolerant than expected",options:["Extremely strict and harsh","Very fast","Completely rigid"],level:"moderate",example:"The lenient teacher allowed extra time."},
{word:"Meticulous",pos:"adjective",correct:"Showing great attention to detail; very careful",options:["Extremely careless and sloppy","Very fast and reckless","Completely indifferent"],level:"moderate",example:"The meticulous artist checked every brushstroke."},
{word:"Notorious",pos:"adjective",correct:"Famous or well-known, typically for something bad",options:["Completely unknown and obscure","Very cheerful","Extremely kind"],level:"moderate",example:"The notorious thief was finally caught."},
{word:"Obsolete",pos:"adjective",correct:"No longer produced or used; out of date",options:["Completely modern and current","Very popular","Extremely useful and relevant"],level:"moderate",example:"Fax machines are now nearly obsolete."},
{word:"Prudent",pos:"adjective",correct:"Acting with care and thought for the future",options:["Extremely reckless and impulsive","Very slow","Completely careless"],level:"moderate",example:"It is prudent to save money for emergencies."},
{word:"Radiant",pos:"adjective",correct:"Sending out light; shining or glowing brightly",options:["Completely dark and dull","Very quiet","Extremely cold"],level:"moderate",example:"The radiant bride walked down the aisle."},
{word:"Serene",pos:"adjective",correct:"Calm, peaceful, and untroubled",options:["Extremely anxious and disturbed","Very loud","Completely chaotic"],level:"moderate",example:"The serene lake reflected the mountains."},
{word:"Tenacious",pos:"adjective",correct:"Tending to keep a firm hold; persistent",options:["Quick to give up and quit","Very forgetful","Extremely weak"],level:"moderate",example:"She was tenacious in pursuing her dreams."},
{word:"Vigilant",pos:"adjective",correct:"Keeping careful watch for possible danger",options:["Completely unaware and inattentive","Very slow","Extremely relaxed"],level:"moderate",example:"The vigilant guard spotted the intruder."},
{word:"Wary",pos:"adjective",correct:"Feeling or showing caution about possible dangers",options:["Completely careless and unsuspecting","Very loud","Extremely fast"],level:"moderate",example:"She was wary of strangers at night."},
{word:"Zealous",pos:"adjective",correct:"Having or showing great energy for a cause",options:["Completely apathetic and uninterested","Very slow","Extremely lazy"],level:"moderate",example:"The zealous volunteer worked tirelessly."},
{word:"Ambiguous",pos:"adjective",correct:"Open to more than one interpretation; unclear",options:["Perfectly clear and unambiguous","Very loud","Extremely small"],level:"moderate",example:"His ambiguous instructions confused the team."},
{word:"Boisterous",pos:"adjective",correct:"Noisy, energetic, and cheerfully rough",options:["Very quiet and well-behaved","Extremely shy","Completely still"],level:"moderate",example:"The boisterous children played in the yard."},
{word:"Cautious",pos:"adjective",correct:"Careful to avoid potential problems or dangers",options:["Extremely reckless and daring","Very loud","Completely fast"],level:"moderate",example:"Be cautious when crossing the busy street."},
{word:"Discreet",pos:"adjective",correct:"Careful not to cause offense or attract attention",options:["Very open and indiscreet","Extremely loud","Very bright"],level:"moderate",example:"She was discreet about her personal affairs."},
{word:"Eminent",pos:"adjective",correct:"Famous and respected; distinguished",options:["Completely unknown and obscure","Very noisy","Extremely slow"],level:"moderate",example:"The eminent scientist won the Nobel Prize."},
{word:"Fervent",pos:"adjective",correct:"Having or displaying passionate intensity",options:["Completely indifferent and cool","Very slow","Extremely quiet"],level:"moderate",example:"She was a fervent supporter of the cause."},
{word:"Gallant",pos:"adjective",correct:"Brave and chivalrous; heroic",options:["Cowardly and fearful","Very quiet","Extremely slow"],level:"moderate",example:"The gallant knight rescued the princess."},
{word:"Humble",pos:"adjective",correct:"Having a modest view of one's own importance",options:["Excessively proud and boastful","Very loud","Extremely fast"],level:"moderate",example:"Despite his success, he remained humble."},
{word:"Indifferent",pos:"adjective",correct:"Having no particular interest or concern",options:["Deeply interested and passionate","Very loud","Extremely fast"],level:"moderate",example:"He was indifferent to the outcome."},
{word:"Lavish",pos:"adjective",correct:"Sumptuously rich, elaborate, or luxurious",options:["Very plain and simple","Extremely quiet","Very small"],level:"moderate",example:"The lavish party had gourmet food and decorations."},
{word:"Malicious",pos:"adjective",correct:"Intending or intended to do harm",options:["Completely kind and well-intentioned","Very slow","Extremely quiet"],level:"moderate",example:"The malicious gossip spread quickly."},
{word:"Nimble",pos:"adjective",correct:"Quick and light in movement or action; agile",options:["Very slow and clumsy","Extremely loud","Completely still"],level:"moderate",example:"The nimble cat leaped between branches."},
{word:"Ominous",pos:"adjective",correct:"Giving the impression that something bad is coming",options:["Very reassuring and positive","Extremely bright","Completely cheerful"],level:"moderate",example:"Dark ominous clouds gathered on the horizon."},
{word:"Placid",pos:"adjective",correct:"Calm and peaceful; not easily upset",options:["Easily agitated and volatile","Very loud","Extremely fast"],level:"moderate",example:"The placid lake was perfect for kayaking."},
{word:"Quaint",pos:"adjective",correct:"Attractively unusual or old-fashioned",options:["Completely modern and ordinary","Very loud","Extremely large"],level:"moderate",example:"They stayed in a quaint country cottage."},
{word:"Resilient",pos:"adjective",correct:"Able to withstand or recover quickly from difficulties",options:["Easily broken or overwhelmed","Very quiet","Completely fragile"],level:"moderate",example:"Resilient communities rebuilt after the flood."},
{word:"Skeptical",pos:"adjective",correct:"Not easily convinced; having doubts or reservations",options:["Completely believing without question","Very loud","Extremely fast"],level:"moderate",example:"She was skeptical about the wild story."},
{word:"Tactful",pos:"adjective",correct:"Having a sense of what is fitting and considerate",options:["Extremely blunt and insensitive","Very loud","Completely careless"],level:"moderate",example:"She was tactful when delivering bad news."},
{word:"Unfazed",pos:"adjective",correct:"Not disturbed or disconcerted; composed",options:["Deeply troubled and distressed","Very loud","Extremely fast"],level:"moderate",example:"He was unfazed by the unexpected challenge."},
{word:"Vivid",pos:"adjective",correct:"Producing powerful feelings or clear images in the mind",options:["Very dull and faded","Extremely quiet","Completely boring"],level:"moderate",example:"She had a vivid memory of her childhood."},
{word:"Weary",pos:"adjective",correct:"Feeling or showing fatigue from effort or endurance",options:["Feeling full of energy","Very fast","Extremely strong"],level:"moderate",example:"The weary traveler needed rest."},
{word:"Xenial",pos:"adjective",correct:"Hospitable and friendly to guests or strangers",options:["Hostile to guests and strangers","Very loud","Extremely cold"],level:"moderate",example:"The xenial host made everyone feel welcome."},
{word:"Yearning",pos:"noun",correct:"A feeling of intense longing for something",options:["Complete indifference to everything","Strong anger toward others","Deep satisfaction with life"],level:"moderate",example:"She felt a yearning to travel the world."},
{word:"Appease",pos:"verb",correct:"Pacify or placate someone by agreeing to their demands",options:["Deliberately provoke or irritate","Run very quickly","Make things worse"],level:"moderate",example:"He tried to appease the angry crowd."},
{word:"Baffle",pos:"verb",correct:"Totally bewilder or perplex someone",options:["Make something completely clear","Run away fast","Sleep deeply"],level:"moderate",example:"The complex question baffled everyone."},
{word:"Coerce",pos:"verb",correct:"Persuade someone to do something by force or threats",options:["Ask someone kindly and politely","Give freely without condition","Help someone voluntarily"],level:"moderate",example:"He was coerced into signing the contract."},
{word:"Deter",pos:"verb",correct:"Discourage someone from doing something",options:["Strongly encourage someone to proceed","Run very fast","Sleep deeply"],level:"moderate",example:"High prices deter many customers."},
{word:"Engulf",pos:"verb",correct:"Sweep over or surround completely",options:["Expose or leave completely bare","Move slowly away","Shrink to a very small size"],level:"moderate",example:"Flames engulfed the entire building."},
{word:"Fabricate",pos:"verb",correct:"Invent false information in order to deceive",options:["Provide truthful accurate information","Move very quickly","Sleep deeply"],level:"moderate",example:"He fabricated an alibi for the night."},
{word:"Grasp",pos:"verb",correct:"Seize and hold firmly; understand fully",options:["Release and let go completely","Move away quickly","Sleep deeply"],level:"moderate",example:"She grasped the concept after studying hard."},
{word:"Hamper",pos:"verb",correct:"Hinder or impede the movement or progress of",options:["Strongly assist and support","Run very fast","Sleep deeply"],level:"moderate",example:"Snow hampering travel across the mountains."},
{word:"Imply",pos:"verb",correct:"Suggest or indicate without being explicit",options:["State something directly and explicitly","Run away fast","Sleep deeply"],level:"moderate",example:"Her silence seemed to imply agreement."},
{word:"Justify",pos:"verb",correct:"Show or prove to be right or reasonable",options:["Prove something wrong or unreasonable","Run very fast","Sleep deeply"],level:"moderate",example:"She justified her decision with evidence."},
{word:"Linger",pos:"verb",correct:"Stay in a place longer than necessary",options:["Leave a place quickly and abruptly","Run away fast","Jump up high"],level:"moderate",example:"The smell of perfume lingered in the room."},
{word:"Manipulate",pos:"verb",correct:"Control or influence cleverly and unfairly",options:["Treat someone honestly and fairly","Run very fast","Sleep deeply"],level:"moderate",example:"The con artist manipulated his victims."},
{word:"Neglect",pos:"verb",correct:"Fail to care for properly; disregard",options:["Give careful attention and care","Run very fast","Sleep deeply"],level:"moderate",example:"She neglected to water her plants."},
{word:"Overwhelm",pos:"verb",correct:"Bury or drown beneath a huge mass; defeat completely",options:["Handle easily and with comfort","Run very fast","Sleep deeply"],level:"moderate",example:"The workload overwhelmed the new employee."},
{word:"Persist",pos:"verb",correct:"Continue firmly in a course of action despite obstacles",options:["Give up quickly and easily","Run away fast","Sleep deeply"],level:"moderate",example:"She persisted despite many setbacks."},
{word:"Reconcile",pos:"verb",correct:"Restore friendly relations between people",options:["Cause a quarrel or conflict between people","Run very fast","Sleep deeply"],level:"moderate",example:"They reconciled after years of being apart."},
{word:"Scrutinize",pos:"verb",correct:"Examine or inspect closely and thoroughly",options:["Ignore or overlook completely","Run very fast","Sleep deeply"],level:"moderate",example:"The inspector scrutinized every document."},
{word:"Trivial",pos:"adjective",correct:"Of little value or importance; minor",options:["Of great importance and significance","Extremely loud","Very bright"],level:"moderate",example:"She ignored the trivial complaint."},
{word:"Urge",pos:"verb",correct:"Try earnestly to persuade someone",options:["Strongly discourage someone","Run very fast","Sleep deeply"],level:"moderate",example:"I urge you to reconsider your decision."},
{word:"Venture",pos:"verb",correct:"Dare to go somewhere or do something risky",options:["Avoid anything risky or uncertain","Run away from danger","Sleep deeply"],level:"moderate",example:"She ventured into unknown territory."},
{word:"Withhold",pos:"verb",correct:"Refuse to give something that is due",options:["Give freely and generously","Run very fast","Sleep deeply"],level:"moderate",example:"He withheld the information from the press."},
{word:"Yearn",pos:"verb",correct:"Have an intense feeling of longing for something",options:["Feel completely satisfied with everything","Run away fast","Sleep deeply"],level:"moderate",example:"She yearned for peace and quiet."},
{word:"Accelerate",pos:"verb",correct:"Begin to move more quickly; increase in rate",options:["Slow down progressively","Stand still completely","Move sideways"],level:"moderate",example:"The car accelerated onto the highway."},
{word:"Acknowledge",pos:"verb",correct:"Accept or admit the existence or truth of something",options:["Completely deny or ignore","Run very fast","Sleep deeply"],level:"moderate",example:"She acknowledged making a mistake."},
{word:"Advocate",pos:"verb",correct:"Publicly recommend or support a cause",options:["Strongly oppose a cause","Run very fast","Sleep deeply"],level:"moderate",example:"She advocates for equal rights."},
{word:"Aggravate",pos:"verb",correct:"Make a problem, injury, or offense worse or more serious",options:["Make something better or easier","Run very fast","Sleep deeply"],level:"moderate",example:"Stress can aggravate health problems."},
{word:"Anticipate",pos:"verb",correct:"Expect or predict something will happen",options:["Be completely surprised by events","Run very fast","Sleep deeply"],level:"moderate",example:"She anticipated his reaction."},
{word:"Astonish",pos:"verb",correct:"Surprise or impress someone greatly",options:["Leave someone completely unimpressed","Run very fast","Sleep deeply"],level:"moderate",example:"Her talent astonished the judges."},
{word:"Perceive",pos:"verb",correct:"Become aware of or understand something",options:["Remain unaware of something","Run very fast","Sleep deeply"],level:"moderate",example:"He perceived danger in the situation."},
{word:"Profound",pos:"adjective",correct:"Very great or intense; showing deep understanding",options:["Very shallow and superficial","Extremely loud","Completely quiet"],level:"moderate",example:"Her words had a profound effect on him."},
{word:"Vague",pos:"adjective",correct:"Of uncertain, indefinite, or unclear character",options:["Extremely clear and precise","Very loud","Completely fast"],level:"moderate",example:"His instructions were too vague to follow."},
{word:"Conceal",pos:"verb",correct:"Keep from sight; hide",options:["Reveal and display openly","Run very fast","Sleep deeply"],level:"moderate",example:"She concealed the gift behind her back."},
{word:"Depict",pos:"verb",correct:"Represent by a drawing, painting, or other art",options:["Erase or destroy completely","Run very fast","Sleep deeply"],level:"moderate",example:"The painting depicted a stormy sea."},
{word:"Enhance",pos:"verb",correct:"Intensify, increase, or further improve quality or value",options:["Reduce or diminish quality","Run very fast","Sleep deeply"],level:"moderate",example:"Exercise enhances your mood naturally."},
{word:"Flourish",pos:"verb",correct:"Grow or develop in a healthy or vigorous way",options:["Wither and decline slowly","Run very fast","Sleep deeply"],level:"moderate",example:"The business flourished under new management."},
{word:"Generate",pos:"verb",correct:"Cause something to arise or come about",options:["Destroy or eliminate completely","Run very fast","Sleep deeply"],level:"moderate",example:"The factory generates electricity."},
{word:"Hostile",pos:"adjective",correct:"Showing or feeling opposition or enmity; unfriendly",options:["Extremely welcoming and friendly","Very quiet","Completely bright"],level:"moderate",example:"The hostile crowd booed the speaker."},
{word:"Inevitable",pos:"adjective",correct:"Certain to happen; unavoidable",options:["Easily preventable and avoidable","Very loud","Extremely fast"],level:"moderate",example:"Change is inevitable over time."},
{word:"Mediocre",pos:"adjective",correct:"Of only moderate quality; not very good",options:["Of exceptional and outstanding quality","Very loud","Extremely fast"],level:"moderate",example:"The film was mediocre at best."},
{word:"Prominent",pos:"adjective",correct:"Important; famous; projecting from something else",options:["Completely unknown and unimportant","Very quiet","Extremely small"],level:"moderate",example:"She is a prominent figure in politics."},
{word:"Subtle",pos:"adjective",correct:"So delicate or precise as to be difficult to analyze",options:["Extremely obvious and apparent","Very loud","Completely fast"],level:"moderate",example:"There was a subtle difference between the two."},
{word:"Tedious",pos:"adjective",correct:"Too long, slow, or dull; tiresome or monotonous",options:["Extremely exciting and engaging","Very fast","Completely loud"],level:"moderate",example:"The tedious task took all afternoon."},
{word:"Transparent",pos:"adjective",correct:"Allowing light to pass through; easy to perceive",options:["Completely opaque and impenetrable","Very loud","Extremely fast"],level:"moderate",example:"Glass is transparent."},
{word:"Unique",pos:"adjective",correct:"Being the only one of its kind; unlike anything else",options:["Extremely common and ordinary","Very loud","Completely fast"],level:"moderate",example:"Her voice is truly unique."},
{word:"Vulnerable",pos:"adjective",correct:"Susceptible to physical or emotional attack or harm",options:["Completely safe and protected","Very loud","Extremely fast"],level:"moderate",example:"Young animals are vulnerable to predators."},
{word:"Adequate",pos:"adjective",correct:"Satisfactory or acceptable in quality or quantity",options:["Completely insufficient and lacking","Very loud","Extremely fast"],level:"moderate",example:"The resources were adequate for the project."},
{word:"Beneficial",pos:"adjective",correct:"Resulting in good; favorable; helpful",options:["Harmful and damaging to one's health","Very loud","Extremely fast"],level:"moderate",example:"Exercise is beneficial for your health."},
{word:"Catastrophic",pos:"adjective",correct:"Involving or causing sudden great damage or suffering",options:["Completely harmless and positive","Very quiet","Extremely slow"],level:"moderate",example:"The flood was catastrophic for the region."},
{word:"Deliberate",pos:"adjective",correct:"Done consciously and intentionally; not accidental",options:["Done entirely by accident or mistake","Very fast","Extremely loud"],level:"moderate",example:"Her deliberate silence spoke volumes."},
{word:"Efficient",pos:"adjective",correct:"Achieving maximum productivity with minimum wasted effort",options:["Extremely wasteful and unproductive","Very loud","Completely slow"],level:"moderate",example:"The efficient system saved a lot of time."},
{word:"Flexible",pos:"adjective",correct:"Capable of bending without breaking; adaptable",options:["Completely rigid and inflexible","Very loud","Extremely fast"],level:"moderate",example:"The flexible schedule allowed for changes."},
{word:"Gradual",pos:"adjective",correct:"Taking place or progressing slowly or by degrees",options:["Happening very suddenly and abruptly","Very loud","Extremely bright"],level:"moderate",example:"The gradual increase in temperature was noticed."},

// ═══════════════ COMMONLY USED ═══════════════
{word:"Analyze",pos:"verb",correct:"Examine in detail to understand the nature of something",options:["Ignore completely without examination","Run very fast","Sleep deeply"],level:"common",example:"Scientists analyze data to draw conclusions."},
{word:"Benefit",pos:"noun",correct:"An advantage or profit gained from something",options:["A disadvantage or loss from something","Something very loud","Something very fast"],level:"common",example:"Regular exercise has many health benefits."},
{word:"Communicate",pos:"verb",correct:"Share or exchange information, news, or ideas",options:["Keep information completely secret","Run very fast","Sleep deeply"],level:"common",example:"We communicate via email every day."},
{word:"Develop",pos:"verb",correct:"Grow or cause to grow and become more mature",options:["Shrink and become smaller over time","Run very fast","Sleep deeply"],level:"common",example:"Children develop skills at different rates."},
{word:"Evidence",pos:"noun",correct:"Facts or signs that indicate something is true",options:["Facts that disprove something","Something very loud","Something very fast"],level:"common",example:"The detective found evidence at the scene."},
{word:"Focus",pos:"verb",correct:"Pay particular attention to; concentrate on",options:["Ignore or pay no attention to","Run very fast","Sleep deeply"],level:"common",example:"You need to focus on your studies."},
{word:"Global",pos:"adjective",correct:"Relating to or encompassing the whole world",options:["Limited to a very small local area","Very loud","Extremely fast"],level:"common",example:"Climate change is a global issue."},
{word:"Impact",pos:"noun",correct:"A strong effect or influence on someone or something",options:["A complete lack of effect","Something very loud","Something very fast"],level:"common",example:"Technology has had a major impact on work."},
{word:"Issue",pos:"noun",correct:"An important topic or problem for debate or discussion",options:["Something completely trivial and unimportant","Something very loud","Something very fast"],level:"common",example:"The healthcare issue dominated the debate."},
{word:"justify",pos:"verb",correct:"Show or prove something to be right or reasonable",options:["Prove something to be wrong","Run very fast","Sleep deeply"],level:"common",example:"Can you justify this decision?"},
{word:"Knowledge",pos:"noun",correct:"Facts, information, and skills acquired through experience",options:["Complete ignorance and unawareness","Something very loud","Something very fast"],level:"common",example:"Knowledge is power."},
{word:"Launch",pos:"verb",correct:"Start or set in motion an activity or enterprise",options:["Stop or end a project completely","Run very fast","Sleep deeply"],level:"common",example:"The company launched a new product."},
{word:"Manage",pos:"verb",correct:"Be in charge of; handle or control effectively",options:["Lose control of completely","Run very fast","Sleep deeply"],level:"common",example:"She manages a team of ten people."},
{word:"Network",pos:"noun",correct:"A system of connected people, things, or organizations",options:["A single isolated individual or object","Something very loud","Something very fast"],level:"common",example:"She built a strong professional network."},
{word:"Objective",pos:"noun",correct:"A goal or aim to be achieved",options:["Something aimless with no purpose","Something very loud","Something very fast"],level:"common",example:"Our objective is to increase sales."},
{word:"Process",pos:"noun",correct:"A series of actions taken to achieve an end",options:["A random one-time event","Something very loud","Something very fast"],level:"common",example:"The manufacturing process takes two days."},
{word:"Quality",pos:"noun",correct:"The standard of something as measured against others",options:["The lack of any measurable standard","Something very loud","Something very fast"],level:"common",example:"This restaurant is known for its quality."},
{word:"Resource",pos:"noun",correct:"A stock or supply available for use when needed",options:["Something completely unavailable","Something very loud","Something very fast"],level:"common",example:"Water is our most precious resource."},
{word:"Strategy",pos:"noun",correct:"A plan of action designed to achieve a long-term goal",options:["A random, unplanned approach","Something very loud","Something very fast"],level:"common",example:"The company needed a new strategy."},
{word:"Technology",pos:"noun",correct:"Application of scientific knowledge for practical purposes",options:["The absence of scientific tools","Something very loud","Something very fast"],level:"common",example:"Technology changes our lives every day."},
{word:"Understand",pos:"verb",correct:"Perceive the intended meaning of words or actions",options:["Be completely confused by something","Run very fast","Sleep deeply"],level:"common",example:"Did you understand the instructions?"},
{word:"Value",pos:"noun",correct:"The importance or worth of something",options:["Something completely worthless","Something very loud","Something very fast"],level:"common",example:"She values her friendships above all."},
{word:"Achieve",pos:"verb",correct:"Successfully bring about or reach a desired objective",options:["Fail to accomplish a goal","Run very fast","Sleep deeply"],level:"common",example:"She achieved great success through hard work."},
{word:"Balance",pos:"noun",correct:"A situation in which things are equal or in correct proportions",options:["A state of complete imbalance","Something very loud","Something very fast"],level:"common",example:"Work-life balance is important for well-being."},
{word:"Challenge",pos:"noun",correct:"A task or situation that tests someone's abilities",options:["Something extremely easy and effortless","Something very loud","Something very fast"],level:"common",example:"Learning a language is a challenge."},
{word:"Diverse",pos:"adjective",correct:"Showing a great deal of variety; very different",options:["All being exactly the same","Very loud","Extremely fast"],level:"common",example:"The city has a diverse population."},
{word:"Effective",pos:"adjective",correct:"Successful in producing a desired or intended result",options:["Completely failing to produce results","Very loud","Extremely fast"],level:"common",example:"The medicine was very effective."},
{word:"Frequent",pos:"adjective",correct:"Occurring often; habitual",options:["Happening very rarely","Very loud","Extremely fast"],level:"common",example:"He made frequent trips to the library."},
{word:"Growth",pos:"noun",correct:"The process of increasing in size or importance",options:["The process of decreasing in size","Something very loud","Something very fast"],level:"common",example:"The company showed strong growth last year."},
{word:"Health",pos:"noun",correct:"The state of being free from illness or injury",options:["The state of being sick","Something very loud","Something very fast"],level:"common",example:"Good health is your greatest wealth."},
{word:"Inspire",pos:"verb",correct:"Fill someone with the urge to do or feel something",options:["Discourage someone from doing something","Run very fast","Sleep deeply"],level:"common",example:"Her story inspired many young people."},
{word:"Consider",pos:"verb",correct:"Think carefully about; take into account",options:["Dismiss without any thought","Run very fast","Sleep deeply"],level:"common",example:"Consider all options before deciding."},
{word:"Determine",pos:"verb",correct:"Establish or ascertain something by research or calculation",options:["Leave something uncertain and unknown","Run very fast","Sleep deeply"],level:"common",example:"We need to determine the cause of the problem."},
{word:"Establish",pos:"verb",correct:"Set up on a firm or permanent basis; bring into being",options:["Dismantle or dissolve something","Run very fast","Sleep deeply"],level:"common",example:"She established a successful business."},
{word:"Influence",pos:"verb",correct:"Have an effect on the character or behavior of someone",options:["Have no effect on something","Run very fast","Sleep deeply"],level:"common",example:"Friends influence our choices greatly."},
{word:"Maintain",pos:"verb",correct:"Keep in an existing state; preserve from failure",options:["Allow something to deteriorate","Run very fast","Sleep deeply"],level:"common",example:"You must maintain your equipment regularly."},
{word:"Obtain",pos:"verb",correct:"Get, acquire, or secure something",options:["Give away or lose something","Run very fast","Sleep deeply"],level:"common",example:"How do I obtain a driver's license?"},
{word:"Promote",pos:"verb",correct:"Further the progress or growth of; advertise",options:["Hinder the progress of something","Run very fast","Sleep deeply"],level:"common",example:"She was promoted to manager after a year."},
{word:"Require",pos:"verb",correct:"Need for a particular purpose; depend on for success",options:["Not need at all; be optional","Run very fast","Sleep deeply"],level:"common",example:"This job requires attention to detail."},
{word:"Support",pos:"verb",correct:"Bear all or part of the weight of; give assistance to",options:["Oppose or undermine someone","Run very fast","Sleep deeply"],level:"common",example:"Her family supported her career choice."},
{word:"Transform",pos:"verb",correct:"Make a thorough or dramatic change in the form or appearance",options:["Keep something completely unchanged","Run very fast","Sleep deeply"],level:"common",example:"The renovation transformed the old building."},
{word:"Utilize",pos:"verb",correct:"Make practical and effective use of something",options:["Waste or fail to use something","Run very fast","Sleep deeply"],level:"common",example:"We should utilize all available resources."},
{word:"Vary",pos:"verb",correct:"Differ in size, amount, or degree; change",options:["Stay exactly the same always","Run very fast","Sleep deeply"],level:"common",example:"Prices vary depending on the season."},
{word:"Widespread",pos:"adjective",correct:"Distributed over a wide area or number of people",options:["Limited to a very small area","Very loud","Extremely fast"],level:"common",example:"The disease had widespread effects."},
{word:"Yield",pos:"verb",correct:"Produce or provide a result; give way under pressure",options:["Take without giving anything","Run very fast","Sleep deeply"],level:"common",example:"The farm yields large crops every year."},
{word:"Access",pos:"noun",correct:"The means or opportunity to approach or enter a place",options:["A barrier preventing entry","Something very loud","Something very fast"],level:"common",example:"Students have access to the library."},
{word:"Apply",pos:"verb",correct:"Make a formal request; put something into operation",options:["Withdraw or retract a request","Run very fast","Sleep deeply"],level:"common",example:"She decided to apply for the job."},
{word:"Assess",pos:"verb",correct:"Evaluate or estimate the nature or quality of something",options:["Ignore without any evaluation","Run very fast","Sleep deeply"],level:"common",example:"The doctor assessed his condition."},
{word:"Assume",pos:"verb",correct:"Suppose to be true without proof; take for granted",options:["Know something with certainty","Run very fast","Sleep deeply"],level:"common",example:"Don't assume you know the answer."},
{word:"Aware",pos:"adjective",correct:"Having knowledge or perception of a situation or fact",options:["Completely unaware and ignorant","Very loud","Extremely fast"],level:"common",example:"Are you aware of the risks involved?"},
{word:"Capacity",pos:"noun",correct:"The maximum amount something can contain or do",options:["The minimum possible amount","Something very loud","Something very fast"],level:"common",example:"The stadium has a capacity of 50,000."},
{word:"Circumstance",pos:"noun",correct:"A fact or condition related to an event or action",options:["Something completely irrelevant","Something very loud","Something very fast"],level:"common",example:"The circumstances made it difficult."},
{word:"Consistent",pos:"adjective",correct:"Acting in the same way over time; unchanging",options:["Constantly changing and unpredictable","Very loud","Extremely fast"],level:"common",example:"She was consistent in her work ethic."},
{word:"Context",pos:"noun",correct:"The circumstances forming the setting for an event or idea",options:["Something completely unrelated to anything","Something very loud","Something very fast"],level:"common",example:"Read the paragraph in its full context."},
{word:"Contribute",pos:"verb",correct:"Give something, especially a donation, to a common cause",options:["Take away or reduce from something","Run very fast","Sleep deeply"],level:"common",example:"Everyone should contribute to society."},
{word:"Create",pos:"verb",correct:"Bring something into existence; make or produce",options:["Destroy or remove something","Run very fast","Sleep deeply"],level:"common",example:"She created a beautiful painting."},
{word:"Critical",pos:"adjective",correct:"Extremely important or decisive; expressing disapproval",options:["Completely unimportant or trivial","Very loud","Extremely fast"],level:"common",example:"Timing is critical in surgery."},
{word:"Current",pos:"adjective",correct:"Happening or existing now; belonging to the present time",options:["Belonging to a long past era","Very loud","Extremely fast"],level:"common",example:"What is the current situation?"},
{word:"Define",pos:"verb",correct:"State or describe exactly the nature or scope of",options:["Leave something vague and unclear","Run very fast","Sleep deeply"],level:"common",example:"Can you define that word?"},
{word:"Demonstrate",pos:"verb",correct:"Show clearly by giving proof or evidence",options:["Hide evidence and conceal the truth","Run very fast","Sleep deeply"],level:"common",example:"She demonstrated how to use the tool."},
{word:"Design",pos:"verb",correct:"Plan and make with specific functions or purposes in mind",options:["Create randomly without any plan","Run very fast","Sleep deeply"],level:"common",example:"He designed the logo for the company."},
{word:"Discuss",pos:"verb",correct:"Talk about a topic and consider different aspects",options:["Avoid a topic entirely","Run very fast","Sleep deeply"],level:"common",example:"Let's discuss the plan in detail."},
{word:"Environment",pos:"noun",correct:"The surroundings or conditions in which someone lives",options:["A place completely separated from nature","Something very loud","Something very fast"],level:"common",example:"We must protect our environment."},
{word:"Expect",pos:"verb",correct:"Think or believe something will happen; anticipate",options:["Be completely surprised by events","Run very fast","Sleep deeply"],level:"common",example:"I expect the package by tomorrow."},
{word:"Explore",pos:"verb",correct:"Travel through an unfamiliar place or examine thoroughly",options:["Avoid and stay away from a place","Run very fast","Sleep deeply"],level:"common",example:"They explored the ancient ruins."},
{word:"Feature",pos:"noun",correct:"A distinctive attribute or aspect of something",options:["Something completely indistinct","Something very loud","Something very fast"],level:"common",example:"The main feature of the phone is its camera."},
{word:"Individual",pos:"noun",correct:"A single human being as distinct from a group",options:["A large group or community","Something very loud","Something very fast"],level:"common",example:"Every individual deserves respect."},
{word:"Involve",pos:"verb",correct:"Include or affect someone as a participant",options:["Exclude someone from participation","Run very fast","Sleep deeply"],level:"common",example:"The project involves many departments."},
{word:"Major",pos:"adjective",correct:"Of great importance, extent, or significance",options:["Of very little importance","Very loud","Extremely fast"],level:"common",example:"It was a major breakthrough in science."},
{word:"Method",pos:"noun",correct:"A particular way of doing something",options:["A completely random approach","Something very loud","Something very fast"],level:"common",example:"She tried a new method of teaching."},
{word:"Modern",pos:"adjective",correct:"Relating to the present or recent times",options:["Belonging to a very distant past","Very loud","Extremely fast"],level:"common",example:"Modern technology is advancing rapidly."},
{word:"Participate",pos:"verb",correct:"Take part in an activity or event",options:["Avoid and not take part in something","Run very fast","Sleep deeply"],level:"common",example:"Everyone is encouraged to participate."},
{word:"Possible",pos:"adjective",correct:"Able to be done or achieved",options:["Completely impossible to achieve","Very loud","Extremely fast"],level:"common",example:"Is it possible to finish by Friday?"},
{word:"Potential",pos:"noun",correct:"Having or showing the capacity to develop in the future",options:["Something with no future development","Something very loud","Something very fast"],level:"common",example:"She has great potential as a leader."},
{word:"Provide",pos:"verb",correct:"Make available for use; supply",options:["Take away or withhold from someone","Run very fast","Sleep deeply"],level:"common",example:"The school provides free meals."},
{word:"Respond",pos:"verb",correct:"Say something in reply; react to something",options:["Remain silent and unresponsive","Run very fast","Sleep deeply"],level:"common",example:"Please respond to my email."},
{word:"Reveal",pos:"verb",correct:"Make previously unknown or secret information known",options:["Hide or conceal information","Run very fast","Sleep deeply"],level:"common",example:"The investigation revealed the truth."},
{word:"Significant",pos:"adjective",correct:"Sufficiently great to be noteworthy or important",options:["Too small to be noticed or matter","Very loud","Extremely fast"],level:"common",example:"This is a significant achievement."},
{word:"Similar",pos:"adjective",correct:"Resembling without being identical; alike",options:["Completely different and unlike","Very loud","Extremely fast"],level:"common",example:"Their ideas were similar in nature."},
{word:"Situation",pos:"noun",correct:"A set of circumstances in which one finds oneself",options:["A place with no circumstances","Something very loud","Something very fast"],level:"common",example:"We are in a difficult situation."},
{word:"Solution",pos:"noun",correct:"A means of solving a problem or dealing with a situation",options:["Something that creates more problems","Something very loud","Something very fast"],level:"common",example:"We found a solution to the issue."},
{word:"Source",pos:"noun",correct:"A place, person, or thing from which something comes",options:["A dead end with no origin","Something very loud","Something very fast"],level:"common",example:"What is the source of this information?"},
{word:"Specific",pos:"adjective",correct:"Clearly defined or identified; precise",options:["Very vague and unclear","Very loud","Extremely fast"],level:"common",example:"Be specific about what you need."},
{word:"Structure",pos:"noun",correct:"The arrangement of elements in a complex entity",options:["Complete disorder and chaos","Something very loud","Something very fast"],level:"common",example:"The building had a strong structure."},
{word:"Suggest",pos:"verb",correct:"Put forward an idea for consideration",options:["Dismiss all ideas without consideration","Run very fast","Sleep deeply"],level:"common",example:"I suggest we try a different approach."},
{word:"System",pos:"noun",correct:"A set of things working together as a mechanism",options:["A single unconnected element","Something very loud","Something very fast"],level:"common",example:"The immune system protects the body."},
{word:"Trend",pos:"noun",correct:"A general direction in which something develops or changes",options:["Something completely static and unchanging","Something very loud","Something very fast"],level:"common",example:"The trend in fashion changes every season."},
{word:"Valid",pos:"adjective",correct:"Actually supporting the conclusion; sound and defensible",options:["Completely unsound and invalid","Very loud","Extremely fast"],level:"common",example:"You need a valid ID to vote."},
{word:"Vision",pos:"noun",correct:"The ability to think about the future with imagination",options:["A complete inability to plan ahead","Something very loud","Something very fast"],level:"common",example:"She had a clear vision for her company."},
{word:"Volunteer",pos:"verb",correct:"Freely offer to do something without being asked",options:["Refuse to help or participate","Run very fast","Sleep deeply"],level:"common",example:"She volunteered at the local shelter."},
{word:"Abandon",pos:"verb",correct:"Give up completely or leave permanently",options:["Stay with and support completely","Run very fast","Sleep deeply"],level:"common",example:"He had to abandon the sinking ship."},
{word:"Absorb",pos:"verb",correct:"Take in or soak up energy, liquid, or other substance",options:["Emit or release a substance","Run very fast","Sleep deeply"],level:"common",example:"Plants absorb sunlight for photosynthesis."},
{word:"Adapt",pos:"verb",correct:"Make suitable for a new use or condition; adjust",options:["Stay the same despite change","Run very fast","Sleep deeply"],level:"common",example:"Animals adapt to their environments."},
{word:"Address",pos:"verb",correct:"Think about and deal with a problem or issue",options:["Completely ignore and avoid something","Run very fast","Sleep deeply"],level:"common",example:"We need to address this problem now."},
{word:"Adjust",pos:"verb",correct:"Alter slightly to achieve a desired fit or position",options:["Leave something entirely unchanged","Run very fast","Sleep deeply"],level:"common",example:"Adjust the thermostat to 72 degrees."},
{word:"Afford",pos:"verb",correct:"Have enough money to pay for something",options:["Be unable to pay for something","Run very fast","Sleep deeply"],level:"common",example:"Can you afford a new car?"},
{word:"Approach",pos:"verb",correct:"Come near or nearer to in distance or time",options:["Move further away from something","Run very fast","Sleep deeply"],level:"common",example:"She approached the stage nervously."},
{word:"Attempt",pos:"verb",correct:"Make an effort to do or achieve something",options:["Make no effort whatsoever","Run very fast","Sleep deeply"],level:"common",example:"He attempted to climb the mountain."},
{word:"Avoid",pos:"verb",correct:"Keep away from or stop oneself from doing",options:["Seek out and approach something","Run very fast","Sleep deeply"],level:"common",example:"She tries to avoid sugar in her diet."},
{word:"Career",pos:"noun",correct:"An occupation undertaken for a long period of one's life",options:["A short temporary job","Something very loud","Something very fast"],level:"common",example:"She built a successful career in medicine."},
{word:"Cause",pos:"noun",correct:"The reason something happens; a principle worth defending",options:["A random unrelated event","Something very loud","Something very fast"],level:"common",example:"What was the cause of the accident?"},
{word:"Change",pos:"verb",correct:"Make or become different; alter",options:["Keep everything exactly the same","Run very fast","Sleep deeply"],level:"common",example:"Things change with the passage of time."},
{word:"Choice",pos:"noun",correct:"An act of selecting among alternatives",options:["A forced action with no alternative","Something very loud","Something very fast"],level:"common",example:"You have a choice between the two."},
{word:"Claim",pos:"verb",correct:"State or assert that something is the case without proof",options:["Deny or disclaim a statement","Run very fast","Sleep deeply"],level:"common",example:"She claimed she was innocent."},
{word:"Clear",pos:"adjective",correct:"Easy to perceive, understand, or interpret",options:["Very confusing and unclear","Very loud","Extremely fast"],level:"common",example:"The instructions were clear and simple."},
{word:"Collect",pos:"verb",correct:"Bring or gather together; accumulate",options:["Scatter or distribute widely","Run very fast","Sleep deeply"],level:"common",example:"She collects vintage stamps."},
{word:"Compare",pos:"verb",correct:"Estimate, measure, or note the similarity or difference",options:["Consider two things as completely unrelated","Run very fast","Sleep deeply"],level:"common",example:"Compare the two prices before buying."},
{word:"Complete",pos:"adjective",correct:"Having all necessary parts; finished; total",options:["Having parts missing; unfinished","Very loud","Extremely fast"],level:"common",example:"She submitted a complete report."},
{word:"Complex",pos:"adjective",correct:"Consisting of many different and connected parts",options:["Very simple with only one part","Very loud","Extremely fast"],level:"common",example:"The human brain is extremely complex."},
{word:"Component",pos:"noun",correct:"A part or element of a larger whole",options:["Something complete and independent","Something very loud","Something very fast"],level:"common",example:"Each component of the engine matters."},
{word:"Concept",pos:"noun",correct:"An abstract idea; a general notion",options:["A very concrete physical object","Something very loud","Something very fast"],level:"common",example:"Freedom is an important concept."},
{word:"Confirm",pos:"verb",correct:"Establish the truth or correctness of something",options:["Cast doubt on or deny something","Run very fast","Sleep deeply"],level:"common",example:"Please confirm your appointment."},
{word:"Connection",pos:"noun",correct:"A relationship in which two things are linked",options:["A complete separation between things","Something very loud","Something very fast"],level:"common",example:"There is a connection between diet and health."},
{word:"Consequence",pos:"noun",correct:"A result or effect of an action or condition",options:["Something with no effect at all","Something very loud","Something very fast"],level:"common",example:"Every action has a consequence."},
{word:"Control",pos:"verb",correct:"Determine the behavior of; have power over",options:["Have no power over something","Run very fast","Sleep deeply"],level:"common",example:"She couldn't control her emotions."},
{word:"Cooperation",pos:"noun",correct:"The action of working together toward the same end",options:["Working against one another","Something very loud","Something very fast"],level:"common",example:"Success requires cooperation."},
{word:"Cope",pos:"verb",correct:"Deal effectively with something difficult",options:["Be overwhelmed by a challenge","Run very fast","Sleep deeply"],level:"common",example:"She learned to cope with stress."},
{word:"Correct",pos:"adjective",correct:"Free from error; in accordance with fact",options:["Full of errors; inaccurate","Very loud","Extremely fast"],level:"common",example:"That is the correct answer."},
{word:"Data",pos:"noun",correct:"Facts and statistics collected for reference or analysis",options:["Wild unverified guesses","Something very loud","Something very fast"],level:"common",example:"Scientists collect data for years."},
{word:"Decade",pos:"noun",correct:"A period of ten years",options:["A period of one year","Something very loud","Something very fast"],level:"common",example:"Technology advanced rapidly in the last decade."},
{word:"Decrease",pos:"verb",correct:"Become smaller or fewer in size, amount, or intensity",options:["Become larger or more in number","Run very fast","Sleep deeply"],level:"common",example:"Prices decreased after the sale."},
{word:"Demand",pos:"noun",correct:"An insistent request; the consumer desire to purchase",options:["A complete lack of interest","Something very loud","Something very fast"],level:"common",example:"Demand for electric cars is rising."},
{word:"Describe",pos:"verb",correct:"Give an account in words of someone or something",options:["Remain silent about something","Run very fast","Sleep deeply"],level:"common",example:"Describe what you saw at the scene."},
{word:"Detail",pos:"noun",correct:"A small individual item of information",options:["A broad vague generalization","Something very loud","Something very fast"],level:"common",example:"Pay attention to the detail."},
{word:"Difference",pos:"noun",correct:"A way in which things are not the same",options:["A way in which things are identical","Something very loud","Something very fast"],level:"common",example:"What is the difference between the two?"},
{word:"Discover",pos:"verb",correct:"Find unexpectedly or in the course of a search",options:["Deliberately hide something","Run very fast","Sleep deeply"],level:"common",example:"Scientists discovered a new element."},
{word:"Distribute",pos:"verb",correct:"Hand out or spread over an area",options:["Collect and gather from an area","Run very fast","Sleep deeply"],level:"common",example:"The charity distributed food to families."},
{word:"Effort",pos:"noun",correct:"A vigorous attempt; use of physical or mental energy",options:["Complete laziness and inaction","Something very loud","Something very fast"],level:"common",example:"Success takes real effort."},
{word:"Emphasize",pos:"verb",correct:"Give special importance or attention to something",options:["Downplay or reduce the importance","Run very fast","Sleep deeply"],level:"common",example:"She emphasized the need for safety."},
{word:"Ensure",pos:"verb",correct:"Make certain that something shall occur or be so",options:["Create uncertainty or doubt","Run very fast","Sleep deeply"],level:"common",example:"Please ensure you lock the door."},
{word:"Evaluate",pos:"verb",correct:"Form an idea of the amount or quality of something",options:["Accept without any examination","Run very fast","Sleep deeply"],level:"common",example:"We must evaluate the results carefully."},
{word:"Example",pos:"noun",correct:"A thing that represents a class or group",options:["Something completely unique","Something very loud","Something very fast"],level:"common",example:"Give me an example of a mammal."},
{word:"Expand",pos:"verb",correct:"Become or make larger; increase in size",options:["Shrink and become smaller","Run very fast","Sleep deeply"],level:"common",example:"The company plans to expand globally."},
{word:"Experience",pos:"noun",correct:"Practical contact with and observation of facts",options:["Complete ignorance of a subject","Something very loud","Something very fast"],level:"common",example:"She has ten years of experience."},
{word:"Experiment",pos:"noun",correct:"A scientific procedure undertaken to make a discovery",options:["An assumption made without testing","Something very loud","Something very fast"],level:"common",example:"The experiment proved the hypothesis."},
{word:"Explain",pos:"verb",correct:"Make something clear by describing it in detail",options:["Confuse someone about a topic","Run very fast","Sleep deeply"],level:"common",example:"Can you explain the process?"},
{word:"Fact",pos:"noun",correct:"A thing that is known to be true",options:["Something believed without evidence","Something very loud","Something very fast"],level:"common",example:"Is that a fact or an opinion?"},
{word:"Factor",pos:"noun",correct:"A circumstance that contributes to a result",options:["Something completely irrelevant","Something very loud","Something very fast"],level:"common",example:"Stress is a factor in heart disease."},
{word:"Foundation",pos:"noun",correct:"The basis on which something stands; an institution",options:["Something with no base or support","Something very loud","Something very fast"],level:"common",example:"Education is the foundation of success."},
{word:"Function",pos:"noun",correct:"The purpose or role of something; an activity or purpose",options:["Something with no purpose","Something very loud","Something very fast"],level:"common",example:"What is the function of this button?"},
{word:"Fundamental",pos:"adjective",correct:"Forming a necessary base or core; of central importance",options:["Completely unnecessary and secondary","Very loud","Extremely fast"],level:"common",example:"Freedom is a fundamental right."},
{word:"Goal",pos:"noun",correct:"The object of a person's ambition or effort; an aim",options:["Something with no direction or aim","Something very loud","Something very fast"],level:"common",example:"Her goal is to become a doctor."},
{word:"Identify",pos:"verb",correct:"Establish the identity of; recognize and name",options:["Fail to recognize or name something","Run very fast","Sleep deeply"],level:"common",example:"Can you identify the problem?"},
{word:"Improve",pos:"verb",correct:"Make or become better in quality",options:["Make something worse in quality","Run very fast","Sleep deeply"],level:"common",example:"She works hard to improve her skills."},
{word:"Include",pos:"verb",correct:"Make part of a whole or set; contain as part of a whole",options:["Exclude or keep out of something","Run very fast","Sleep deeply"],level:"common",example:"Please include me in the meeting."},
{word:"Indicate",pos:"verb",correct:"Point out; show; be a sign or symptom of",options:["Conceal or hide from view","Run very fast","Sleep deeply"],level:"common",example:"The results indicate a positive trend."},
{word:"Information",pos:"noun",correct:"Facts provided about something or someone",options:["Deliberate misinformation","Something very loud","Something very fast"],level:"common",example:"I need more information about this."},
{word:"Interact",pos:"verb",correct:"Act in such a way as to have an effect on each other",options:["Remain isolated from one another","Run very fast","Sleep deeply"],level:"common",example:"Children interact with each other at school."},
{word:"Investigate",pos:"verb",correct:"Carry out a formal inquiry or research into something",options:["Ignore without any inquiry","Run very fast","Sleep deeply"],level:"common",example:"Police are investigating the case."},
{word:"Learn",pos:"verb",correct:"Gain knowledge or skill through study or experience",options:["Lose all previously gained knowledge","Run very fast","Sleep deeply"],level:"common",example:"We learn something new every day."},
{word:"Limit",pos:"noun",correct:"A point beyond which something does not extend",options:["Something with no boundaries","Something very loud","Something very fast"],level:"common",example:"There is a speed limit on this road."},
{word:"Logical",pos:"adjective",correct:"Of or according to the rules of logic; reasonable",options:["Completely irrational and unreasonable","Very loud","Extremely fast"],level:"common",example:"His argument was logical and clear."},
{word:"Measure",pos:"verb",correct:"Ascertain the size, amount, or degree of something",options:["Ignore the size or amount","Run very fast","Sleep deeply"],level:"common",example:"Measure the room before buying furniture."},
{word:"Motivate",pos:"verb",correct:"Provide a reason for someone to act in a certain way",options:["Discourage someone from acting","Run very fast","Sleep deeply"],level:"common",example:"Good managers motivate their teams."},
{word:"Necessary",pos:"adjective",correct:"Required to be done; absolutely essential",options:["Completely optional and unneeded","Very loud","Extremely fast"],level:"common",example:"It is necessary to wear a seatbelt."},
{word:"Observe",pos:"verb",correct:"Notice or perceive something and register it",options:["Ignore and fail to notice something","Run very fast","Sleep deeply"],level:"common",example:"Observe the changes in nature."},
{word:"Opinion",pos:"noun",correct:"A view or judgment formed about something",options:["An established and undeniable fact","Something very loud","Something very fast"],level:"common",example:"In my opinion, the movie was great."},
{word:"Opportunity",pos:"noun",correct:"A time or set of circumstances making something possible",options:["A situation making something impossible","Something very loud","Something very fast"],level:"common",example:"Travel is an opportunity to grow."},
{word:"Organization",pos:"noun",correct:"An organized group of people with a particular purpose",options:["A completely random group with no purpose","Something very loud","Something very fast"],level:"common",example:"She joined a non-profit organization."},
{word:"Overcome",pos:"verb",correct:"Succeed in dealing with a problem or difficulty",options:["Fail completely to deal with a problem","Run very fast","Sleep deeply"],level:"common",example:"She overcame her fear of public speaking."},
{word:"Pattern",pos:"noun",correct:"A repeated decorative design; a regular form or sequence",options:["Something completely random with no order","Something very loud","Something very fast"],level:"common",example:"Scientists noticed a pattern in the data."},
{word:"Practice",pos:"verb",correct:"Perform an activity repeatedly to improve skill",options:["Do something only once without repeating","Run very fast","Sleep deeply"],level:"common",example:"Practice makes perfect."},
{word:"Predict",pos:"verb",correct:"Say or estimate what will happen in the future",options:["Be completely unaware of future events","Run very fast","Sleep deeply"],level:"common",example:"Scientists can predict earthquakes."},
{word:"Prepare",pos:"verb",correct:"Make ready or able to do something",options:["Leave something unprepared","Run very fast","Sleep deeply"],level:"common",example:"Prepare for the exam by studying."},
{word:"Priority",pos:"noun",correct:"A thing regarded as more important than others",options:["Something of no importance","Something very loud","Something very fast"],level:"common",example:"Health should be your top priority."},
{word:"Problem",pos:"noun",correct:"A matter that causes difficulty; something needing resolution",options:["Something easy with no difficulty","Something very loud","Something very fast"],level:"common",example:"We need to solve this problem."},
{word:"Prove",pos:"verb",correct:"Demonstrate the truth or existence of something",options:["Fail to demonstrate something","Run very fast","Sleep deeply"],level:"common",example:"She proved her theory was correct."},
{word:"Recognize",pos:"verb",correct:"Identify someone or something from previous encounters",options:["Fail to identify someone or something","Run very fast","Sleep deeply"],level:"common",example:"I didn't recognize him at first."},
{word:"Reduce",pos:"verb",correct:"Make smaller or less in size, amount, or degree",options:["Increase something in size","Run very fast","Sleep deeply"],level:"common",example:"Exercise helps reduce stress."},
{word:"Relationship",pos:"noun",correct:"The way in which two or more concepts are connected",options:["Complete disconnection between things","Something very loud","Something very fast"],level:"common",example:"They have a strong relationship."},
{word:"Represent",pos:"verb",correct:"Be entitled to act on behalf of; symbolize",options:["Fail to act on behalf of someone","Run very fast","Sleep deeply"],level:"common",example:"She represents her country at the Olympics."},
{word:"Result",pos:"noun",correct:"A consequence, effect, or outcome of something",options:["The starting cause of something","Something very loud","Something very fast"],level:"common",example:"The result was better than expected."},
{word:"Role",pos:"noun",correct:"The function assumed by someone in a particular situation",options:["Having no function in a situation","Something very loud","Something very fast"],level:"common",example:"Teachers play a vital role in society."},
{word:"Schedule",pos:"noun",correct:"A plan for carrying out a process or procedure",options:["Doing things with no plan at all","Something very loud","Something very fast"],level:"common",example:"Check the schedule for the meeting."},
{word:"Select",pos:"verb",correct:"Carefully choose as the best or most suitable",options:["Randomly pick without any criteria","Run very fast","Sleep deeply"],level:"common",example:"Select your preferred color."},
{word:"Sense",pos:"noun",correct:"A faculty for perceiving something; a feeling that something is the case",options:["A complete lack of perception","Something very loud","Something very fast"],level:"common",example:"She had a sense of adventure."},
{word:"Share",pos:"verb",correct:"Have or give a portion of something to others",options:["Keep everything exclusively for oneself","Run very fast","Sleep deeply"],level:"common",example:"Share your knowledge with others."},
{word:"Skill",pos:"noun",correct:"The ability to do something well; expertise",options:["A complete lack of ability","Something very loud","Something very fast"],level:"common",example:"Communication is an important skill."},
{word:"Standard",pos:"noun",correct:"A level of quality or achievement expected or required",options:["Something with no quality requirements","Something very loud","Something very fast"],level:"common",example:"The school maintains high standards."},
{word:"Statement",pos:"noun",correct:"A definite or clear expression of something in speech or writing",options:["Something vague and ambiguous","Something very loud","Something very fast"],level:"common",example:"He made a bold statement."},
{word:"Succeed",pos:"verb",correct:"Achieve the desired aim or result",options:["Fail to achieve a desired aim","Run very fast","Sleep deeply"],level:"common",example:"Hard work helps you succeed."},
{word:"Sufficient",pos:"adjective",correct:"Enough; adequate for the purpose",options:["Not enough; inadequate","Very loud","Extremely fast"],level:"common",example:"Is there sufficient time to finish?"},
{word:"Summarize",pos:"verb",correct:"Give a brief statement of the main points",options:["Explain something in excessive detail","Run very fast","Sleep deeply"],level:"common",example:"Can you summarize the article?"},
{word:"Target",pos:"noun",correct:"A person, object, or place aimed at or selected as a goal",options:["Something ignored or avoided entirely","Something very loud","Something very fast"],level:"common",example:"The company set a sales target."},
{word:"Task",pos:"noun",correct:"A piece of work to be done; an undertaking",options:["Something with no work involved","Something very loud","Something very fast"],level:"common",example:"She completed every task on time."},
{word:"Theory",pos:"noun",correct:"A system of ideas intended to explain something",options:["A proven and undeniable fact","Something very loud","Something very fast"],level:"common",example:"Darwin proposed the theory of evolution."},
{word:"Typical",pos:"adjective",correct:"Having the distinctive qualities of a particular group",options:["Very unusual and atypical","Very loud","Extremely fast"],level:"common",example:"This is typical weather for October."},
{word:"Update",pos:"verb",correct:"Make something more modern or add the latest information",options:["Make something outdated or obsolete","Run very fast","Sleep deeply"],level:"common",example:"Please update your software regularly."},
{word:"Valuable",pos:"adjective",correct:"Worth a great deal of money; very useful or important",options:["Worth nothing; completely useless","Very loud","Extremely fast"],level:"common",example:"Time is the most valuable resource."},
{word:"Verify",pos:"verb",correct:"Make sure something is true, accurate, or justified",options:["Accept something without verification","Run very fast","Sleep deeply"],level:"common",example:"Please verify your email address."},
{word:"Visible",pos:"adjective",correct:"Able to be seen; in sight",options:["Completely invisible and hidden","Very loud","Extremely fast"],level:"common",example:"Stars are visible on clear nights."},
{word:"Compete",pos:"verb",correct:"Strive against others to attain a goal or prize",options:["Cooperate and work together","Run very fast","Sleep deeply"],level:"common",example:"They compete in national tournaments."},
{word:"Culture",pos:"noun",correct:"The ideas, customs, and behavior of a society",options:["A place with no shared ideas","Something very loud","Something very fast"],level:"common",example:"India has a rich and diverse culture."},
{word:"Decision",pos:"noun",correct:"A conclusion or resolution reached after consideration",options:["A random unthinking action","Something very loud","Something very fast"],level:"common",example:"Making the right decision takes time."},
{word:"Economy",pos:"noun",correct:"The wealth and resources of a country or region",options:["The poverty of a region","Something very loud","Something very fast"],level:"common",example:"The global economy is recovering."},
{word:"Education",pos:"noun",correct:"The process of receiving instruction at school",options:["The absence of all instruction","Something very loud","Something very fast"],level:"common",example:"Education opens many doors."},
{word:"Energy",pos:"noun",correct:"The strength and vitality required for sustained activity",options:["Extreme fatigue and exhaustion","Something very loud","Something very fast"],level:"common",example:"She had energy throughout the day."},
{word:"Event",pos:"noun",correct:"A thing that happens; a planned public occasion",options:["Something that never occurs","Something very loud","Something very fast"],level:"common",example:"The event was a huge success."},
{word:"Freedom",pos:"noun",correct:"The power to act, speak, or think without restraint",options:["The state of being under complete control","Something very loud","Something very fast"],level:"common",example:"Freedom of speech is protected."},
{word:"Government",pos:"noun",correct:"The group of people with authority to govern a country",options:["A place with no authority or rule","Something very loud","Something very fast"],level:"common",example:"The government passed a new law."},
{word:"History",pos:"noun",correct:"The study of past events; the past considered as a whole",options:["Predictions about future events","Something very loud","Something very fast"],level:"common",example:"We must learn from history."},
{word:"Industry",pos:"noun",correct:"Economic activity concerned with processing raw materials",options:["A region with no economic activity","Something very loud","Something very fast"],level:"common",example:"The tech industry is growing fast."},
{word:"Justice",pos:"noun",correct:"Just behaviour or treatment; a system for fair outcomes",options:["Unfair and biased treatment","Something very loud","Something very fast"],level:"common",example:"Everyone deserves justice."},
{word:"Language",pos:"noun",correct:"The method of human communication using words",options:["Silence with no communication","Something very loud","Something very fast"],level:"common",example:"She speaks three languages."},
{word:"Leadership",pos:"noun",correct:"The action of leading a group of people or organization",options:["The act of following aimlessly","Something very loud","Something very fast"],level:"common",example:"Good leadership is inspiring."},
{word:"Market",pos:"noun",correct:"A place or system for buying and selling goods",options:["A place with no buying or selling","Something very loud","Something very fast"],level:"common",example:"The stock market rose today."},
{word:"Memory",pos:"noun",correct:"The faculty of retaining and recalling past experience",options:["The inability to remember anything","Something very loud","Something very fast"],level:"common",example:"She has an excellent memory."},
{word:"Nature",pos:"noun",correct:"The phenomena of the physical world; the basic character of something",options:["The artificial man-made world","Something very loud","Something very fast"],level:"common",example:"Spending time in nature reduces stress."},
{word:"Policy",pos:"noun",correct:"A course or principle of action adopted by an organization",options:["Acting without any guidelines","Something very loud","Something very fast"],level:"common",example:"The company has a no-smoking policy."},
{word:"Population",pos:"noun",correct:"All the inhabitants of a particular place",options:["An empty uninhabited area","Something very loud","Something very fast"],level:"common",example:"The population of India is over 1.4 billion."},
{word:"Power",pos:"noun",correct:"The ability to do something; authority and control",options:["Complete helplessness","Something very loud","Something very fast"],level:"common",example:"Knowledge is power."},
{word:"Pressure",pos:"noun",correct:"The use of influence to compel action; continuous force",options:["Complete freedom from any force","Something very loud","Something very fast"],level:"common",example:"She performs well under pressure."},
{word:"Progress",pos:"noun",correct:"Forward or onward movement toward a destination or goal",options:["Moving backward or staying still","Something very loud","Something very fast"],level:"common",example:"We've made real progress this year."},
{word:"Research",pos:"noun",correct:"Systematic investigation to establish facts",options:["Guessing without investigation","Something very loud","Something very fast"],level:"common",example:"The research took three years."},
{word:"Society",pos:"noun",correct:"The community of people living in the same country",options:["A single isolated individual","Something very loud","Something very fast"],level:"common",example:"Society must protect its vulnerable."},
{word:"Success",pos:"noun",correct:"The accomplishment of an aim or purpose",options:["The complete failure of all aims","Something very loud","Something very fast"],level:"common",example:"Success comes through dedication."},
{word:"Team",pos:"noun",correct:"A group of people working together toward a common goal",options:["A single person working alone","Something very loud","Something very fast"],level:"common",example:"The team won the championship."},
{word:"Truth",pos:"noun",correct:"The quality of being true; a fact or belief accepted as real",options:["Something known to be false","Something very loud","Something very fast"],level:"common",example:"Tell the truth at all times."},
{word:"Wisdom",pos:"noun",correct:"The quality of having experience and good judgement",options:["Foolishness and poor judgement","Something very loud","Something very fast"],level:"common",example:"With age comes wisdom."},

// More advanced common words
{word:"Empathy",pos:"noun",correct:"The ability to understand and share the feelings of another",options:["The inability to understand others' feelings","Something very loud","Something very fast"],level:"common",example:"Empathy is essential in nursing."},
{word:"Integrity",pos:"noun",correct:"The quality of being honest and having strong moral principles",options:["The quality of being dishonest","Something very loud","Something very fast"],level:"common",example:"He is known for his integrity."},
{word:"Innovation",pos:"noun",correct:"The action of introducing new ideas or methods",options:["The preservation of old outdated methods","Something very loud","Something very fast"],level:"common",example:"Innovation drives economic growth."},
{word:"Diversity",pos:"noun",correct:"The state of having a wide range of different things",options:["The state of everything being identical","Something very loud","Something very fast"],level:"common",example:"The team celebrates diversity."},
{word:"Sustainability",pos:"noun",correct:"The ability to maintain at a certain rate or level",options:["The rapid depletion of resources","Something very loud","Something very fast"],level:"common",example:"Sustainability is key for our future."},
{word:"Accountability",pos:"noun",correct:"The fact of being responsible and expected to explain actions",options:["Having no responsibility for one's actions","Something very loud","Something very fast"],level:"common",example:"Accountability builds trust in teams."},
{word:"Transparency",pos:"noun",correct:"Operating in an open way without secrets; being clear",options:["Operating in secrecy and hiding facts","Something very loud","Something very fast"],level:"common",example:"Governments need transparency."},
{word:"Collaborate",pos:"verb",correct:"Work jointly on an activity or project",options:["Work alone on an activity","Run very fast","Sleep deeply"],level:"common",example:"Let's collaborate on this project."},
{word:"Implement",pos:"verb",correct:"Put a decision, plan, or agreement into effect",options:["Abandon or cancel a plan","Run very fast","Sleep deeply"],level:"common",example:"They plan to implement new policies."},
{word:"Prioritize",pos:"verb",correct:"Designate in order of urgency or importance",options:["Treat everything as equally unimportant","Run very fast","Sleep deeply"],level:"common",example:"Learn to prioritize your tasks."},
{word:"Optimize",pos:"verb",correct:"Make the best or most effective use of a resource",options:["Make the worst possible use of something","Run very fast","Sleep deeply"],level:"common",example:"Optimize your workflow for efficiency."},
{word:"Facilitate",pos:"verb",correct:"Make an action or process easier",options:["Make an action more difficult","Run very fast","Sleep deeply"],level:"common",example:"Tools facilitate better communication."},
{word:"Delegate",pos:"verb",correct:"Entrust a task or responsibility to another person",options:["Refuse to trust others with tasks","Run very fast","Sleep deeply"],level:"common",example:"Good leaders delegate effectively."},
{word:"Negotiate",pos:"verb",correct:"Try to reach an agreement through discussion",options:["Refuse to discuss or compromise","Run very fast","Sleep deeply"],level:"common",example:"They negotiated a better deal."},
{word:"Integrate",pos:"verb",correct:"Combine two or more things to form a whole",options:["Separate things into isolated parts","Run very fast","Sleep deeply"],level:"common",example:"We need to integrate these systems."},
{word:"Mitigate",pos:"verb",correct:"Make less severe, serious, or painful",options:["Make something more severe","Run very fast","Sleep deeply"],level:"common",example:"We must mitigate the risks."},
{word:"Allocate",pos:"verb",correct:"Distribute resources or duties for a particular purpose",options:["Collect all resources for oneself","Run very fast","Sleep deeply"],level:"common",example:"Allocate enough time for each task."},
{word:"Initiative",pos:"noun",correct:"The ability to assess and begin things independently",options:["The tendency to wait for others to start","Something very loud","Something very fast"],level:"common",example:"She took the initiative to solve the issue."},
{word:"Momentum",pos:"noun",correct:"The quantity of motion in a moving body; driving force",options:["A complete lack of motion or force","Something very loud","Something very fast"],level:"common",example:"Don't lose momentum on your goals."},
{word:"Perspective",pos:"noun",correct:"A particular way of regarding something; a point of view",options:["A fixed view that never changes","Something very loud","Something very fast"],level:"common",example:"Try to see things from her perspective."},
{word:"Framework",pos:"noun",correct:"A basic structure underlying a system or concept",options:["A chaotic system with no structure","Something very loud","Something very fast"],level:"common",example:"We need a clear framework for the project."},
{word:"Feedback",pos:"noun",correct:"Information about reactions to a product used as a basis for improvement",options:["Withholding all information and reactions","Something very loud","Something very fast"],level:"common",example:"She appreciated the constructive feedback."},
{word:"Milestone",pos:"noun",correct:"A significant stage or event in development",options:["A minor and forgettable event","Something very loud","Something very fast"],level:"common",example:"Graduation is an important milestone."},
{word:"Benchmark",pos:"noun",correct:"A standard or point of reference against which things are compared",options:["Something with no reference value","Something very loud","Something very fast"],level:"common",example:"Set a benchmark for your team's performance."},
{word:"Consensus",pos:"noun",correct:"General agreement among members of a group",options:["Complete disagreement among a group","Something very loud","Something very fast"],level:"common",example:"They reached a consensus on the plan."},
{word:"Credibility",pos:"noun",correct:"The quality of being trusted and believed in",options:["The quality of being untrustworthy","Something very loud","Something very fast"],level:"common",example:"Credibility is built over time."},
{word:"Liability",pos:"noun",correct:"The state of being responsible for something; a disadvantage",options:["The state of having no responsibility","Something very loud","Something very fast"],level:"common",example:"His carelessness became a liability."},
{word:"Relevance",pos:"noun",correct:"The quality of being closely connected to the matter at hand",options:["Having no connection to the matter","Something very loud","Something very fast"],level:"common",example:"The article's relevance to our topic is clear."},
{word:"Resilience",pos:"noun",correct:"The capacity to recover quickly from difficulties",options:["The inability to recover from difficulty","Something very loud","Something very fast"],level:"common",example:"Resilience is a key trait for success."},
{word:"Versatile",pos:"adjective",correct:"Able to adapt to many different functions or activities",options:["Limited to only one function","Very loud","Extremely fast"],level:"common",example:"She is a versatile musician."},
{word:"Pragmatic",pos:"adjective",correct:"Dealing with things sensibly and realistically",options:["Dealing with things impractically","Very loud","Extremely fast"],level:"common",example:"Take a pragmatic approach to the problem."},
{word:"Dynamic",pos:"adjective",correct:"Characterized by constant change, activity, or progress",options:["Completely static with no change","Very loud","Extremely fast"],level:"common",example:"The dynamic market keeps changing."},
{word:"Innovative",pos:"adjective",correct:"Featuring new methods; advanced and original",options:["Old-fashioned and not original","Very loud","Extremely fast"],level:"common",example:"The company is known for innovative products."},
{word:"Proactive",pos:"adjective",correct:"Creating or controlling a situation rather than responding",options:["Always reacting rather than planning ahead","Very loud","Extremely fast"],level:"common",example:"Be proactive in solving problems early."},
{word:"Collaborative",pos:"adjective",correct:"Produced or conducted by two or more parties working together",options:["Done alone without help","Very loud","Extremely fast"],level:"common",example:"The project was collaborative and successful."},
{word:"Sustainable",pos:"adjective",correct:"Able to be maintained at a certain rate or level",options:["Unable to continue or be maintained","Very loud","Extremely fast"],level:"common",example:"We need sustainable energy sources."},
{word:"Comprehensive",pos:"adjective",correct:"Including or dealing with all aspects of something",options:["Extremely incomplete and partial","Very loud","Extremely fast"],level:"common",example:"She wrote a comprehensive report."},
{word:"Coherent",pos:"adjective",correct:"Logical and consistent; clearly articulated",options:["Illogical and inconsistent","Very loud","Extremely fast"],level:"common",example:"His speech was coherent and well-organized."},
{word:"Concise",pos:"adjective",correct:"Giving a lot of information clearly in few words",options:["Using many words without much meaning","Very loud","Extremely fast"],level:"common",example:"Write a concise summary of the article."},
{word:"Credible",pos:"adjective",correct:"Able to be believed; convincing",options:["Completely unbelievable and implausible","Very loud","Extremely fast"],level:"common",example:"She gave a credible explanation."},
{word:"Ethical",pos:"adjective",correct:"Relating to moral principles; morally correct",options:["Morally wrong and unacceptable","Very loud","Extremely fast"],level:"common",example:"The company made an ethical decision."},
{word:"Feasible",pos:"adjective",correct:"Possible and practical to do easily",options:["Completely impossible or impractical","Very loud","Extremely fast"],level:"common",example:"Is it feasible to finish by Friday?"},
{word:"Inclusive",pos:"adjective",correct:"Not excluding any particular group of people",options:["Deliberately excluding certain groups","Very loud","Extremely fast"],level:"common",example:"The program is inclusive and welcoming."},
{word:"Measurable",pos:"adjective",correct:"Able to be measured or quantified",options:["Impossible to measure or quantify","Very loud","Extremely fast"],level:"common",example:"Set measurable goals for the team."},
{word:"Reliable",pos:"adjective",correct:"Consistently good in quality; able to be trusted",options:["Inconsistent and untrustworthy","Very loud","Extremely fast"],level:"common",example:"She is a reliable and hardworking employee."},
{word:"Scalable",pos:"adjective",correct:"Able to be increased in size or scale as needed",options:["Unable to grow or expand","Very loud","Extremely fast"],level:"common",example:"Build a scalable business model."},
{word:"Strategic",pos:"adjective",correct:"Relating to the identification of long-term aims",options:["Done without any planning or aim","Very loud","Extremely fast"],level:"common",example:"Strategic thinking is a leadership skill."},
{word:"Accessible",pos:"adjective",correct:"Able to be reached or obtained; easily understood",options:["Impossible to reach or understand","Very loud","Extremely fast"],level:"common",example:"The park is accessible to all."},
{word:"Actionable",pos:"adjective",correct:"Able to be acted on; giving clear direction",options:["Impossible to act on; vague","Very loud","Extremely fast"],level:"common",example:"Give actionable advice."},
{word:"Adaptable",pos:"adjective",correct:"Able to adjust to new conditions",options:["Unable to adjust to any change","Very loud","Extremely fast"],level:"common",example:"An adaptable employee thrives in any role."},
{word:"Analytical",pos:"adjective",correct:"Relating to the analysis of data; using logical reasoning",options:["Ignoring data and logic","Very loud","Extremely fast"],level:"common",example:"She has an analytical mind."},
{word:"Assertive",pos:"adjective",correct:"Having or showing confidence and forcefulness",options:["Lacking confidence; timid and passive","Very loud","Extremely fast"],level:"common",example:"Being assertive helps in negotiations."},
{word:"Authentic",pos:"adjective",correct:"Of undisputed origin; genuine and real",options:["Fake, counterfeit, and not genuine","Very loud","Extremely fast"],level:"common",example:"She gave an authentic performance."},
{word:"Constructive",pos:"adjective",correct:"Serving a useful purpose; tending to build up",options:["Destructive and unhelpful","Very loud","Extremely fast"],level:"common",example:"Provide constructive feedback."},
{word:"Decisive",pos:"adjective",correct:"Settling an issue; having the ability to make decisions quickly",options:["Unable to make any decisions","Very loud","Extremely fast"],level:"common",example:"A decisive leader acts quickly."},
{word:"Empowering",pos:"adjective",correct:"Giving authority or power; enabling someone to be stronger",options:["Taking away power and confidence","Very loud","Extremely fast"],level:"common",example:"The training was empowering."},
{word:"Engaging",pos:"adjective",correct:"Charming or interesting; attracting and holding attention",options:["Completely boring and uninteresting","Very loud","Extremely fast"],level:"common",example:"She gave an engaging presentation."},
{word:"Impactful",pos:"adjective",correct:"Having a major effect or influence",options:["Having no effect or influence","Very loud","Extremely fast"],level:"common",example:"The campaign was impactful."},
{word:"Insightful",pos:"adjective",correct:"Having a deep, accurate, and intuitive understanding",options:["Lacking any understanding or perception","Very loud","Extremely fast"],level:"common",example:"Her insightful comments impressed everyone."},
{word:"Inspiring",pos:"adjective",correct:"Having the effect of inspiring someone; motivating",options:["Demotivating and discouraging","Very loud","Extremely fast"],level:"common",example:"The speech was truly inspiring."},
{word:"Intentional",pos:"adjective",correct:"Done with purpose or deliberate intent",options:["Done entirely by accident","Very loud","Extremely fast"],level:"common",example:"Be intentional with your time."},
{word:"Meaningful",pos:"adjective",correct:"Having purpose; communicating something important",options:["Lacking purpose or significance","Very loud","Extremely fast"],level:"common",example:"She wanted meaningful work."},
{word:"Motivated",pos:"adjective",correct:"Enthusiastic and committed to a task or purpose",options:["Without enthusiasm or drive","Very loud","Extremely fast"],level:"common",example:"Stay motivated throughout your journey."},
{word:"Passionate",pos:"adjective",correct:"Showing strong belief, enthusiasm, or desire",options:["Feeling nothing strongly","Very loud","Extremely fast"],level:"common",example:"She is passionate about environmental issues."},
{word:"Resourceful",pos:"adjective",correct:"Having the ability to find quick and clever solutions",options:["Unable to solve problems independently","Very loud","Extremely fast"],level:"common",example:"A resourceful person adapts to change."},
{word:"Responsive",pos:"adjective",correct:"Reacting quickly and positively to suggestions",options:["Slow to react and unresponsive","Very loud","Extremely fast"],level:"common",example:"The customer service was very responsive."},
{word:"Thoughtful",pos:"adjective",correct:"Showing consideration for the needs of others",options:["Completely inconsiderate and self-centered","Very loud","Extremely fast"],level:"common",example:"A thoughtful gift means a lot."},
{word:"Thorough",pos:"adjective",correct:"Complete in every detail; careful and accurate",options:["Incomplete and careless","Very loud","Extremely fast"],level:"common",example:"She conducted a thorough investigation."},

// Extra common vocabulary
{word:"Accomplish",pos:"verb",correct:"Achieve or complete successfully",options:["Fail to complete something","Run very fast","Sleep deeply"],level:"common",example:"She accomplished all her goals."},
{word:"Announce",pos:"verb",correct:"Make a public declaration of important news",options:["Keep news secret and hidden","Run very fast","Sleep deeply"],level:"common",example:"They announced the winner."},
{word:"Arrange",pos:"verb",correct:"Put in a neat, required, or desired order; organize",options:["Scatter or disorganize completely","Run very fast","Sleep deeply"],level:"common",example:"She arranged the flowers beautifully."},
{word:"Attract",pos:"verb",correct:"Draw closer or cause interest in something or someone",options:["Repel or drive away from something","Run very fast","Sleep deeply"],level:"common",example:"The sale attracted many customers."},
{word:"Belong",pos:"verb",correct:"Be rightly placed in a specific group or location",options:["Have no place anywhere","Run very fast","Sleep deeply"],level:"common",example:"Everyone should feel they belong."},
{word:"Calculate",pos:"verb",correct:"Determine mathematically; reckon or figure out",options:["Guess randomly without any logic","Run very fast","Sleep deeply"],level:"common",example:"Calculate the total cost before buying."},
{word:"Capture",pos:"verb",correct:"Take into one's possession by force; record accurately",options:["Release and let go freely","Run very fast","Sleep deeply"],level:"common",example:"The camera captured a beautiful sunset."},
{word:"Combine",pos:"verb",correct:"Unite or merge to form a single unit",options:["Separate into individual parts","Run very fast","Sleep deeply"],level:"common",example:"Combine flour and sugar in a bowl."},
{word:"Conduct",pos:"verb",correct:"Organize and carry out an activity or task",options:["Abandon and avoid all activity","Run very fast","Sleep deeply"],level:"common",example:"She conducted research for her thesis."},
{word:"Connect",pos:"verb",correct:"Join or link together; establish communication",options:["Disconnect and separate completely","Run very fast","Sleep deeply"],level:"common",example:"Connect the cable to the device."},
{word:"Convince",pos:"verb",correct:"Cause someone to believe something; persuade",options:["Cause someone to doubt something","Run very fast","Sleep deeply"],level:"common",example:"He convinced her to take the job."},
{word:"Coordinate",pos:"verb",correct:"Bring different elements into a harmonious relationship",options:["Cause confusion and disorder","Run very fast","Sleep deeply"],level:"common",example:"Coordinate with your team daily."},
{word:"Decide",pos:"verb",correct:"Come to a resolution after consideration",options:["Remain indecisive and uncertain","Run very fast","Sleep deeply"],level:"common",example:"Decide what you want before ordering."},
{word:"Deliver",pos:"verb",correct:"Bring and hand over something to its destination",options:["Collect and take away something","Run very fast","Sleep deeply"],level:"common",example:"The courier will deliver the package."},
{word:"Express",pos:"verb",correct:"Convey a thought or feeling in words or actions",options:["Suppress feelings entirely","Run very fast","Sleep deeply"],level:"common",example:"Express your ideas clearly."},
{word:"Fulfill",pos:"verb",correct:"Achieve or realize a goal, wish, or promise",options:["Fail to achieve a goal or promise","Run very fast","Sleep deeply"],level:"common",example:"She fulfilled her dream of becoming a pilot."},
{word:"Gather",pos:"verb",correct:"Bring together and take in from various places",options:["Scatter and spread out widely","Run very fast","Sleep deeply"],level:"common",example:"Gather all your documents first."},
{word:"Handle",pos:"verb",correct:"Manage or deal with a situation or object",options:["Ignore and avoid a situation","Run very fast","Sleep deeply"],level:"common",example:"She handled the crisis professionally."},
{word:"Highlight",pos:"verb",correct:"Draw attention to something; emphasize",options:["Hide or downplay something","Run very fast","Sleep deeply"],level:"common",example:"Highlight the key points."},
{word:"Monitor",pos:"verb",correct:"Observe and check the progress or quality over time",options:["Ignore and pay no attention to","Run very fast","Sleep deeply"],level:"common",example:"Monitor your health regularly."},
{word:"Navigate",pos:"verb",correct:"Plan and direct a route or course through something",options:["Get completely lost with no direction","Run very fast","Sleep deeply"],level:"common",example:"She navigated through the complex system."},
{word:"Notice",pos:"verb",correct:"Become aware of; pay attention to",options:["Completely miss or overlook","Run very fast","Sleep deeply"],level:"common",example:"Did you notice the new sign?"},
{word:"Organize",pos:"verb",correct:"Arrange into a structured whole; coordinate",options:["Create complete disorder and chaos","Run very fast","Sleep deeply"],level:"common",example:"Organize your workspace before starting."},
{word:"Present",pos:"verb",correct:"Show or offer something for consideration",options:["Hide or conceal from others","Run very fast","Sleep deeply"],level:"common",example:"She presented her findings to the board."},
{word:"Produce",pos:"verb",correct:"Make or manufacture from components; cause to happen",options:["Consume or destroy what exists","Run very fast","Sleep deeply"],level:"common",example:"The factory produces 1000 cars per day."},
{word:"Protect",pos:"verb",correct:"Keep safe from harm or injury",options:["Expose to harm or danger","Run very fast","Sleep deeply"],level:"common",example:"Protect your skin from the sun."},
{word:"Publish",pos:"verb",correct:"Prepare and issue for public distribution",options:["Suppress and prevent distribution","Run very fast","Sleep deeply"],level:"common",example:"She published her first novel."},
{word:"Record",pos:"verb",correct:"Set down in writing or other permanent form",options:["Erase or destroy all records","Run very fast","Sleep deeply"],level:"common",example:"Record your expenses every day."},
{word:"Release",pos:"verb",correct:"Allow to move or flow freely; make available",options:["Hold tightly without letting go","Run very fast","Sleep deeply"],level:"common",example:"They released the new album."},
{word:"Remember",pos:"verb",correct:"Have something come back to mind; not forget",options:["Completely forget and be unable to recall","Run very fast","Sleep deeply"],level:"common",example:"Remember to take your medicine."},
{word:"Remove",pos:"verb",correct:"Take something away from the position it occupies",options:["Place something in its position","Run very fast","Sleep deeply"],level:"common",example:"Remove the batteries from the device."},
{word:"Solve",pos:"verb",correct:"Find an answer or explanation for a problem",options:["Create or worsen a problem","Run very fast","Sleep deeply"],level:"common",example:"Can you solve this equation?"},
{word:"Test",pos:"verb",correct:"Take measures to check the quality or reliability of something",options:["Accept without any verification","Run very fast","Sleep deeply"],level:"common",example:"Test the software before releasing it."},
{word:"Track",pos:"verb",correct:"Follow the course or movements of something over time",options:["Lose all trace of something","Run very fast","Sleep deeply"],level:"common",example:"Track your daily exercise goals."},
{word:"Transfer",pos:"verb",correct:"Move from one place, person, or situation to another",options:["Keep in the same place permanently","Run very fast","Sleep deeply"],level:"common",example:"Transfer the funds to the new account."},
// ═══════════════ NEW WORDS ADDED ═══════════════
{word:"Agile",pos:"adjective",correct:"Able to move quickly and easily; nimble",options:["Slow and clumsy in movement","Very loud and noisy","Extremely heavy"],level:"easy",example:"The agile gymnast flipped across the floor."},
{word:"Alike",pos:"adjective",correct:"Similar to each other; having resemblance",options:["Completely different from one another","Very far apart","Extremely loud"],level:"easy",example:"The twins looked exactly alike."},
{word:"Ample",pos:"adjective",correct:"Enough or more than enough; plentiful",options:["Not enough; insufficient","Very loud","Extremely dark"],level:"easy",example:"There was ample food for everyone."},
{word:"Anxious",pos:"adjective",correct:"Feeling worry or unease about something uncertain",options:["Feeling completely relaxed and calm","Very energetic","Extremely happy"],level:"easy",example:"She was anxious before the big exam."},
{word:"Blunt",pos:"adjective",correct:"Having a worn-down edge; speaking plainly without tact",options:["Very sharp and pointed","Extremely quiet","Very slow"],level:"easy",example:"He gave a blunt answer to the question."},
{word:"Bold",pos:"adjective",correct:"Showing confidence and courage; not afraid",options:["Shy and timid","Extremely quiet","Very slow"],level:"easy",example:"She made a bold decision."},
{word:"Broad",pos:"adjective",correct:"Wide; covering a large area or range",options:["Very narrow and limited","Extremely loud","Very dark"],level:"easy",example:"They had a broad view of the ocean."},
{word:"Busy",pos:"adjective",correct:"Having a great deal to do; occupied",options:["Having nothing to do; idle","Extremely quiet","Very slow"],level:"easy",example:"She was too busy to answer the phone."},
{word:"Cheap",pos:"adjective",correct:"Low in price; not expensive",options:["Very expensive and costly","Extremely loud","Very bright"],level:"easy",example:"The market sold cheap vegetables."},
{word:"Cheerful",pos:"adjective",correct:"Noticeably happy and optimistic",options:["Very sad and gloomy","Extremely tired","Very angry"],level:"easy",example:"She had a cheerful smile every morning."},
{word:"Chilly",pos:"adjective",correct:"Unpleasantly cold; cool and uncomfortable",options:["Very hot and warm","Extremely bright","Very loud"],level:"easy",example:"It was a chilly morning in November."},
{word:"Clumsy",pos:"adjective",correct:"Awkward in movement; prone to dropping things",options:["Very graceful and coordinated","Extremely fast","Very strong"],level:"easy",example:"The clumsy boy knocked over the vase."},
{word:"Cozy",pos:"adjective",correct:"Giving a feeling of comfort, warmth, and relaxation",options:["Cold and uncomfortable","Extremely noisy","Very bright"],level:"easy",example:"The cabin felt cozy in winter."},
{word:"Crisp",pos:"adjective",correct:"Pleasantly firm and fresh; cool and invigorating",options:["Soggy and limp","Very hot","Extremely loud"],level:"easy",example:"The crisp apple crunched when she bit it."},
{word:"Cruel",pos:"adjective",correct:"Willfully causing pain or suffering to others",options:["Kind and compassionate","Very cheerful","Extremely helpful"],level:"easy",example:"It is cruel to tease animals."},
{word:"Damp",pos:"adjective",correct:"Slightly wet; not completely dry",options:["Completely dry","Very bright","Extremely loud"],level:"easy",example:"The damp towel hung on the rack."},
{word:"Dear",pos:"adjective",correct:"Regarded with deep affection; precious",options:["Disliked or held in contempt","Very loud","Extremely fast"],level:"easy",example:"She is a very dear friend."},
{word:"Deep",pos:"adjective",correct:"Extending far down or far in from the surface",options:["Very shallow and near the surface","Extremely loud","Very bright"],level:"easy",example:"The deep ocean hides many creatures."},
{word:"Dense",pos:"adjective",correct:"Closely compacted; hard to see through or understand",options:["Spread out and sparse","Very quiet","Extremely light"],level:"easy",example:"The forest was very dense."},
{word:"Exact",pos:"adjective",correct:"Completely accurate; precise",options:["Approximate and inexact","Very loud","Extremely fast"],level:"easy",example:"Give me the exact answer."},
{word:"Faint",pos:"adjective",correct:"Barely perceptible; lacking strength",options:["Very strong and clear","Extremely loud","Very bright"],level:"easy",example:"She heard a faint sound in the distance."},
{word:"Fair",pos:"adjective",correct:"Treating people equally without bias",options:["Unfair and biased","Very loud","Extremely dark"],level:"easy",example:"The teacher was always fair to everyone."},
{word:"Fierce",pos:"adjective",correct:"Having or displaying a violent intensity",options:["Very gentle and mild","Extremely quiet","Very slow"],level:"easy",example:"The fierce lion roared loudly."},
{word:"Fine",pos:"adjective",correct:"Of high quality; in good health; very thin",options:["Of poor quality and low standard","Extremely thick","Very loud"],level:"easy",example:"She felt fine after resting."},
{word:"Firm",pos:"adjective",correct:"Having a solid, almost unyielding surface; resolute",options:["Soft and easily deformed","Very uncertain","Extremely quiet"],level:"easy",example:"The mattress was firm and supportive."},
{word:"Flat",pos:"adjective",correct:"Smooth and even; without raised areas",options:["Very bumpy and uneven","Extremely tall","Very loud"],level:"easy",example:"The road was flat and straight."},
{word:"Fluent",pos:"adjective",correct:"Able to speak a language easily and accurately",options:["Unable to speak a language well","Extremely loud","Very slow"],level:"easy",example:"She is fluent in three languages."},
{word:"Fond",pos:"adjective",correct:"Having an affection or liking for something",options:["Having strong dislike for something","Very loud","Extremely fast"],level:"easy",example:"He is fond of classical music."},
{word:"Fragile",pos:"adjective",correct:"Easily broken or damaged; delicate",options:["Extremely strong and durable","Very loud","Completely heavy"],level:"easy",example:"Handle the fragile vase with care."},
{word:"Furious",pos:"adjective",correct:"Extremely angry; very fast or intense",options:["Very calm and peaceful","Extremely slow","Very quiet"],level:"easy",example:"She was furious when she missed the train."},
{word:"Generous",pos:"adjective",correct:"Showing readiness to give freely; liberal",options:["Selfish and unwilling to share","Very loud","Extremely slow"],level:"easy",example:"He was generous with his time."},
{word:"Giant",pos:"adjective",correct:"Of very great size; enormous",options:["Extremely small and tiny","Very quiet","Very slow"],level:"easy",example:"A giant whale swam near the boat."},
{word:"Grateful",pos:"adjective",correct:"Feeling or showing thankfulness",options:["Feeling resentful or ungrateful","Extremely loud","Very fast"],level:"easy",example:"She was grateful for all the help."},
{word:"Grave",pos:"adjective",correct:"Giving cause for alarm; serious",options:["Trivial and not serious at all","Very cheerful","Extremely light"],level:"easy",example:"The doctor had a grave expression."},
{word:"Greedy",pos:"adjective",correct:"Having an excessive desire for more than is needed",options:["Very generous and giving","Extremely shy","Very slow"],level:"easy",example:"The greedy child ate all the cake."},
{word:"Gross",pos:"adjective",correct:"Unpleasantly large or obvious; disgusting",options:["Very pleasant and appealing","Extremely small","Very quiet"],level:"easy",example:"That was a gross smell."},
{word:"Guilty",pos:"adjective",correct:"Responsible for a wrongdoing; feeling remorse",options:["Completely innocent of any wrong","Very happy","Extremely fast"],level:"easy",example:"He felt guilty for lying."},
{word:"Hasty",pos:"adjective",correct:"Done with excessive speed or urgency; hurried",options:["Done very slowly and carefully","Extremely quiet","Very dim"],level:"easy",example:"She made a hasty decision."},
{word:"Hollow",pos:"adjective",correct:"Having an empty space inside; not solid",options:["Completely solid and full","Very bright","Extremely loud"],level:"easy",example:"The hollow tree was home to owls."},
{word:"Hopeful",pos:"adjective",correct:"Feeling or inspiring optimism about the future",options:["Feeling completely hopeless","Very loud","Extremely tired"],level:"easy",example:"She was hopeful about getting the job."},
{word:"Huge",pos:"adjective",correct:"Extremely large in size or amount",options:["Very tiny and small","Extremely quiet","Very slow"],level:"easy",example:"A huge wave crashed on the shore."},
{word:"Icy",pos:"adjective",correct:"Covered with ice; very cold; emotionally cold",options:["Very warm and inviting","Extremely dry","Very bright"],level:"easy",example:"The icy roads were dangerous."},
{word:"Ideal",pos:"adjective",correct:"Satisfying one's conception of what is perfect",options:["Far from perfect or suitable","Very loud","Extremely dark"],level:"easy",example:"This is the ideal location for a picnic."},
{word:"Impatient",pos:"adjective",correct:"Having or showing a tendency to be annoyed by delay",options:["Very patient and tolerant","Extremely quiet","Very slow"],level:"easy",example:"He was impatient while waiting in line."},
{word:"Innocent",pos:"adjective",correct:"Not guilty of wrongdoing; pure and naive",options:["Clearly guilty of wrongdoing","Very loud","Extremely fast"],level:"easy",example:"The innocent child didn't know better."},
{word:"Jealous",pos:"adjective",correct:"Feeling or showing envy of someone else",options:["Feeling happy for others' success","Very calm","Extremely generous"],level:"easy",example:"She was jealous of her sister's talent."},
{word:"Joyful",pos:"adjective",correct:"Feeling or causing great happiness",options:["Feeling deep sadness and grief","Very tired","Extremely slow"],level:"easy",example:"The joyful news spread quickly."},
{word:"Lively",pos:"adjective",correct:"Full of life and energy; active and outgoing",options:["Completely dull and lifeless","Very quiet","Extremely slow"],level:"easy",example:"The lively puppy played all day."},
{word:"Loyal",pos:"adjective",correct:"Giving or showing firm support or allegiance",options:["Disloyal and unfaithful","Very loud","Extremely fast"],level:"easy",example:"A loyal friend stands by you."},
{word:"Massive",pos:"adjective",correct:"Large and heavy; solid and imposing",options:["Very small and lightweight","Extremely quiet","Very dim"],level:"easy",example:"A massive rock blocked the path."},
{word:"Mean",pos:"adjective",correct:"Unkind, spiteful, or unfair in behavior",options:["Very kind and generous","Extremely happy","Very loud"],level:"easy",example:"It was mean to make fun of him."},
{word:"Messy",pos:"adjective",correct:"Untidy or dirty; creating disorder",options:["Very neat and tidy","Extremely quiet","Very slow"],level:"easy",example:"His room was extremely messy."},
{word:"Mild",pos:"adjective",correct:"Not severe or strong; gentle; not spicy",options:["Very strong and intense","Extremely loud","Very fast"],level:"easy",example:"The weather was mild and pleasant."},
{word:"Miserable",pos:"adjective",correct:"Very unhappy or uncomfortable",options:["Very happy and comfortable","Extremely loud","Very fast"],level:"easy",example:"She felt miserable with the flu."},
{word:"Muddy",pos:"adjective",correct:"Covered in mud; not clear or bright",options:["Very clean and clear","Extremely bright","Very fast"],level:"easy",example:"His boots were muddy after the hike."},
{word:"Mysterious",pos:"adjective",correct:"Difficult to understand or explain; puzzling",options:["Very clear and easily explained","Extremely loud","Very bright"],level:"easy",example:"The old house had a mysterious air."},
{word:"Narrow",pos:"adjective",correct:"Of small width in proportion to length",options:["Very wide and broad","Extremely tall","Very loud"],level:"easy",example:"The narrow path wound through the woods."},
{word:"Natural",pos:"adjective",correct:"Existing in or derived from nature; not artificial",options:["Completely artificial and man-made","Very loud","Extremely fast"],level:"easy",example:"She preferred natural ingredients."},
{word:"Neat",pos:"adjective",correct:"Arranged in a tidy and orderly way",options:["Very messy and disorganized","Extremely loud","Very dark"],level:"easy",example:"Her desk was always neat."},
{word:"Nervous",pos:"adjective",correct:"Easily agitated or alarmed; anxious",options:["Very calm and composed","Extremely loud","Very fast"],level:"easy",example:"He was nervous before his speech."},
{word:"Obvious",pos:"adjective",correct:"Easily perceived or understood; clear",options:["Very unclear and hard to notice","Extremely quiet","Very dark"],level:"easy",example:"The answer was obvious to everyone."},
{word:"Odd",pos:"adjective",correct:"Different from what is usual or expected; strange",options:["Very normal and ordinary","Extremely loud","Very fast"],level:"easy",example:"It was an odd thing to say."},
{word:"Painful",pos:"adjective",correct:"Causing physical or emotional pain",options:["Causing no pain at all; comfortable","Very quiet","Extremely fast"],level:"easy",example:"The injection was very painful."},
{word:"Pale",pos:"adjective",correct:"Light in color; lacking intensity of color",options:["Very dark and deeply colored","Extremely loud","Very fast"],level:"easy",example:"She looked pale after the shock."},
{word:"Patient",pos:"adjective",correct:"Able to wait calmly without becoming irritated",options:["Very impatient and easily irritated","Extremely loud","Very fast"],level:"easy",example:"A good teacher is patient with students."},
{word:"Plain",pos:"adjective",correct:"Simple; not decorated or elaborate",options:["Very elaborate and decorated","Extremely loud","Very bright"],level:"easy",example:"She wore a plain white shirt."},
{word:"Pleasant",pos:"adjective",correct:"Giving a sense of happiness or enjoyment",options:["Causing discomfort or displeasure","Very loud","Extremely fast"],level:"easy",example:"We had a pleasant walk in the park."},
{word:"Polite",pos:"adjective",correct:"Having or showing good manners and respect",options:["Very rude and disrespectful","Extremely loud","Very fast"],level:"easy",example:"It is polite to say thank you."},
{word:"Powerful",pos:"adjective",correct:"Having great power, strength, or influence",options:["Very weak and powerless","Extremely quiet","Very slow"],level:"easy",example:"The powerful engine roared to life."},
{word:"Precious",pos:"adjective",correct:"Of great value; cherished",options:["Of no value whatsoever","Extremely loud","Very fast"],level:"easy",example:"Gold is a precious metal."},
{word:"Pretty",pos:"adjective",correct:"Attractive in a delicate way; moderately",options:["Very ugly and unattractive","Extremely loud","Very dark"],level:"easy",example:"The garden looked pretty in spring."},
{word:"Proud",pos:"adjective",correct:"Feeling deep pleasure from one's achievements",options:["Feeling ashamed of one's actions","Very loud","Extremely fast"],level:"easy",example:"She was proud of her son."},
{word:"Pure",pos:"adjective",correct:"Not mixed with anything else; clean and wholesome",options:["Mixed with many impurities","Extremely loud","Very dark"],level:"easy",example:"The mountain water was pure."},
{word:"Rapid",pos:"adjective",correct:"Happening in a short time; fast",options:["Very slow and gradual","Extremely quiet","Very dark"],level:"easy",example:"There was rapid progress in technology."},
{word:"Rare",pos:"adjective",correct:"Not occurring very often; uncommon",options:["Very common and ordinary","Extremely loud","Very slow"],level:"easy",example:"Snow is rare in this city."},
{word:"Raw",pos:"adjective",correct:"Not cooked; in its natural state; inexperienced",options:["Completely cooked and processed","Extremely refined","Very loud"],level:"easy",example:"She accidentally ate raw chicken."},
{word:"Real",pos:"adjective",correct:"Actually existing or occurring; not imagined",options:["Imagined or not actually existing","Very loud","Extremely fast"],level:"easy",example:"Is this a real diamond?"},
{word:"Rough",pos:"adjective",correct:"Having an uneven or irregular surface; not gentle",options:["Very smooth and even","Extremely quiet","Very slow"],level:"easy",example:"The rough sea made him seasick."},
{word:"Rude",pos:"adjective",correct:"Offensively impolite or ill-mannered",options:["Very polite and well-mannered","Extremely quiet","Very slow"],level:"easy",example:"It was rude to interrupt the speaker."},
{word:"Selfish",pos:"adjective",correct:"Concerned chiefly with one's own profit or pleasure",options:["Very generous and selfless","Extremely quiet","Very slow"],level:"easy",example:"She was too selfish to share."},
{word:"Severe",pos:"adjective",correct:"Very great; intense; strict or harsh",options:["Very mild and gentle","Extremely quiet","Very slow"],level:"easy",example:"The region suffered severe floods."},
{word:"Shallow",pos:"adjective",correct:"Of little depth; not showing depth of thought",options:["Very deep and profound","Extremely loud","Very fast"],level:"easy",example:"The children waded in the shallow water."},
{word:"Silly",pos:"adjective",correct:"Having or showing a lack of common sense; playfully light-hearted",options:["Very serious and sensible","Extremely loud","Very fast"],level:"easy",example:"Stop being silly and focus."},
{word:"Skinny",pos:"adjective",correct:"Very thin; lacking sufficient flesh",options:["Very fat or overweight","Extremely loud","Very fast"],level:"easy",example:"The skinny stray cat needed food."},
{word:"Sleepy",pos:"adjective",correct:"Feeling a need or inclination to sleep",options:["Very awake and alert","Extremely loud","Very fast"],level:"easy",example:"The sleepy child yawned."},
{word:"Slim",pos:"adjective",correct:"Thin; slender; small in amount or chance",options:["Very fat and wide","Extremely loud","Very fast"],level:"easy",example:"She had a slim figure."},
{word:"Smooth",pos:"adjective",correct:"Having an even surface; free from difficulties",options:["Very rough and uneven","Extremely loud","Very fast"],level:"easy",example:"The road was smooth after repairs."},
{word:"Sneaky",pos:"adjective",correct:"Behaving in a secretive or underhanded way",options:["Very open and honest","Extremely loud","Very fast"],level:"easy",example:"The sneaky fox stole the chicken."},
{word:"Sour",pos:"adjective",correct:"Having an acid taste; showing displeasure",options:["Very sweet and pleasant","Extremely loud","Very fast"],level:"easy",example:"The lemon was very sour."},
{word:"Spicy",pos:"adjective",correct:"Flavored with or fragrant with spice; exciting",options:["Bland and completely without flavor","Extremely cold","Very quiet"],level:"easy",example:"The curry was very spicy."},
{word:"Sticky",pos:"adjective",correct:"Tending to stick to what it touches",options:["Very smooth and non-adhesive","Extremely dry","Very cold"],level:"easy",example:"Her hands were sticky with candy."},
{word:"Stiff",pos:"adjective",correct:"Not easily bent; rigid; formal or constrained",options:["Very flexible and bendy","Extremely soft","Very relaxed"],level:"easy",example:"His neck was stiff after sleeping oddly."},
{word:"Strange",pos:"adjective",correct:"Unusual or surprising in a way that is unsettling",options:["Very normal and expected","Extremely loud","Very fast"],level:"easy",example:"There was a strange noise upstairs."},
{word:"Strict",pos:"adjective",correct:"Demanding that rules are obeyed precisely",options:["Very lenient and permissive","Extremely quiet","Very slow"],level:"easy",example:"The strict teacher had firm rules."},
{word:"Stubborn",pos:"adjective",correct:"Having or showing dogged determination not to change",options:["Very flexible and open to change","Extremely quiet","Very fast"],level:"easy",example:"He was stubborn about his opinion."},
{word:"Sudden",pos:"adjective",correct:"Happening quickly and without warning",options:["Happening very slowly and gradually","Extremely quiet","Very dim"],level:"easy",example:"There was a sudden flash of lightning."},
{word:"Sunny",pos:"adjective",correct:"Bright with sunlight; cheerful",options:["Very dark and cloudy","Extremely loud","Very cold"],level:"easy",example:"We had a sunny day at the beach."},
{word:"Tense",pos:"adjective",correct:"Unable to relax; nervous and anxious",options:["Very relaxed and comfortable","Extremely loud","Very fast"],level:"easy",example:"The atmosphere was tense before the match."},
{word:"Terrible",pos:"adjective",correct:"Extremely bad or serious; causing fear",options:["Very good and pleasant","Extremely quiet","Very slow"],level:"easy",example:"The weather was terrible all week."},
{word:"Thick",pos:"adjective",correct:"With opposite sides far apart; dense",options:["Very thin and sparse","Extremely loud","Very fast"],level:"easy",example:"She wore a thick winter coat."},
{word:"Tough",pos:"adjective",correct:"Strong and resilient; difficult",options:["Very weak and fragile","Extremely quiet","Very easy"],level:"easy",example:"It was a tough climb to the summit."},
{word:"Unwell",pos:"adjective",correct:"Not in good health; ill",options:["In very good health","Extremely loud","Very fast"],level:"easy",example:"She stayed home because she felt unwell."},
{word:"Urgent",pos:"adjective",correct:"Requiring immediate action or attention",options:["Not important or time-sensitive","Very quiet","Extremely slow"],level:"easy",example:"He sent an urgent message to the team."},
{word:"Useful",pos:"adjective",correct:"Able to be used for a practical purpose",options:["Having no practical purpose","Extremely loud","Very fast"],level:"easy",example:"A map is very useful when hiking."},
{word:"Violent",pos:"adjective",correct:"Using or involving physical force intended to hurt",options:["Very gentle and peaceful","Extremely quiet","Very slow"],level:"easy",example:"The storm was violent and destructive."},
{word:"Warm",pos:"adjective",correct:"Of a comfortable temperature; friendly and kind",options:["Very cold and unfriendly","Extremely loud","Very fast"],level:"easy",example:"She gave him a warm welcome."},
{word:"Witty",pos:"adjective",correct:"Showing clever humor; quick and inventive",options:["Dull and humorless","Extremely loud","Very fast"],level:"easy",example:"His witty remarks made everyone laugh."},
{word:"Wonderful",pos:"adjective",correct:"Inspiring delight, pleasure, or admiration",options:["Very bad or unpleasant","Extremely loud","Very fast"],level:"easy",example:"We had a wonderful vacation."},
{word:"Worn",pos:"adjective",correct:"Damaged or shabby as a result of much use",options:["Completely new and unused","Extremely loud","Very fast"],level:"easy",example:"His worn shoes needed replacing."},
{word:"Admire",pos:"verb",correct:"Regard with respect, pleasure, or warm approval",options:["Feel contempt or dislike for","Run very fast","Sleep deeply"],level:"easy",example:"I admire her dedication to work."},
{word:"Amaze",pos:"verb",correct:"Surprise or impress someone greatly",options:["Bore someone completely","Run very fast","Sleep deeply"],level:"easy",example:"Her talent never fails to amaze me."},
{word:"Annoy",pos:"verb",correct:"Make someone slightly angry or impatient",options:["Please and delight someone","Run very fast","Sleep deeply"],level:"easy",example:"The noise annoyed the neighbors."},
{word:"Argue",pos:"verb",correct:"Exchange differing views; give reasons in support of",options:["Agree on everything silently","Run very fast","Sleep deeply"],level:"easy",example:"They argue about politics often."},
{word:"Borrow",pos:"verb",correct:"Take and use something that belongs to someone else",options:["Give something away permanently","Run very fast","Sleep deeply"],level:"easy",example:"Can I borrow your pen?"},
{word:"Break",pos:"verb",correct:"Separate into pieces as a result of impact",options:["Join and repair something broken","Run very fast","Sleep deeply"],level:"easy",example:"Be careful not to break the glass."},
{word:"Build",pos:"verb",correct:"Construct something by putting parts together",options:["Demolish and destroy something","Run very fast","Sleep deeply"],level:"easy",example:"They plan to build a new school."},
{word:"Burn",pos:"verb",correct:"Be on fire; damage or destroy by fire",options:["Extinguish and put out a fire","Run very fast","Sleep deeply"],level:"easy",example:"The candle burned through the night."},
{word:"Carry",pos:"verb",correct:"Support and move something from one place to another",options:["Drop and leave something behind","Run very fast","Sleep deeply"],level:"easy",example:"She carried the baby in her arms."},
{word:"Chase",pos:"verb",correct:"Pursue in order to catch or catch up with",options:["Run away from and flee something","Stand still completely","Sleep deeply"],level:"easy",example:"The dog chased the ball."},
{word:"Cheer",pos:"verb",correct:"Shout for joy; give comfort or encouragement",options:["Boo and express disapproval","Run very fast","Sleep deeply"],level:"easy",example:"The crowd cheered for the team."},
{word:"Choose",pos:"verb",correct:"Pick out one from alternatives",options:["Refuse to pick anything at all","Run very fast","Sleep deeply"],level:"easy",example:"Choose whichever book you like."},
{word:"Close",pos:"verb",correct:"Move so as to cover an opening; shut",options:["Open and expose an area","Run very fast","Sleep deeply"],level:"easy",example:"Please close the window."},
{word:"Cook",pos:"verb",correct:"Prepare food by heating it",options:["Serve food cold and raw","Run very fast","Sleep deeply"],level:"easy",example:"She loves to cook Italian food."},
{word:"Copy",pos:"verb",correct:"Make a similar or identical version of something",options:["Create something entirely original","Run very fast","Sleep deeply"],level:"easy",example:"Don't copy your friend's answers."},
{word:"Count",pos:"verb",correct:"Determine the total number of; be important",options:["Ignore the amount or number of","Run very fast","Sleep deeply"],level:"easy",example:"Count how many apples are in the basket."},
{word:"Cover",pos:"verb",correct:"Place something over to protect or conceal",options:["Expose and uncover completely","Run very fast","Sleep deeply"],level:"easy",example:"Cover the pot while it cooks."},
{word:"Cry",pos:"verb",correct:"Shed tears, typically as a result of pain or emotion",options:["Laugh with joy and happiness","Run very fast","Sleep deeply"],level:"easy",example:"The baby cried all night."},
{word:"Cut",pos:"verb",correct:"Make an opening with a sharp tool",options:["Join and seal something shut","Run very fast","Sleep deeply"],level:"easy",example:"Cut the bread into slices."},
{word:"Dance",pos:"verb",correct:"Move rhythmically to music",options:["Stand completely still without moving","Run very fast","Sleep deeply"],level:"easy",example:"She loves to dance at parties."},
{word:"Deny",pos:"verb",correct:"State that something is not true; refuse to give",options:["Confirm or admit something is true","Run very fast","Sleep deeply"],level:"easy",example:"He denied stealing the money."},
{word:"Die",pos:"verb",correct:"Stop living; cease to exist",options:["Come to life; begin to exist","Run very fast","Sleep deeply"],level:"easy",example:"The flowers died without water."},
{word:"Dig",pos:"verb",correct:"Break up earth with a tool or hands; make a hole",options:["Fill in and cover up a hole","Run very fast","Sleep deeply"],level:"easy",example:"The dog began to dig in the yard."},
{word:"Divide",pos:"verb",correct:"Separate into parts; share among a number",options:["Join together into one whole","Run very fast","Sleep deeply"],level:"easy",example:"Divide the cake into six pieces."},
{word:"Draw",pos:"verb",correct:"Produce a picture by making lines on a surface",options:["Erase all marks from a surface","Run very fast","Sleep deeply"],level:"easy",example:"She likes to draw portraits."},
{word:"Dream",pos:"verb",correct:"Experience images and sensations during sleep; wish",options:["Sleep without any imagery","Run very fast","Stand completely still"],level:"easy",example:"He dreams of becoming a pilot."},
{word:"Drive",pos:"verb",correct:"Operate and control a motor vehicle",options:["Ride as a passenger without control","Run very fast","Sleep deeply"],level:"easy",example:"She learned to drive at 17."},
{word:"Drop",pos:"verb",correct:"Let fall; decrease suddenly in level",options:["Catch and hold something tightly","Run very fast","Sleep deeply"],level:"easy",example:"Be careful not to drop the eggs."},
{word:"Enjoy",pos:"verb",correct:"Take pleasure in an activity or occasion",options:["Dislike intensely and avoid","Run very fast","Sleep deeply"],level:"easy",example:"I enjoy reading on weekends."},
{word:"Enter",pos:"verb",correct:"Come or go into a place",options:["Exit and leave a place","Run very fast","Sleep deeply"],level:"easy",example:"Please knock before you enter."},
{word:"Escape",pos:"verb",correct:"Break free from confinement or danger",options:["Surrender and stay in place","Run very fast","Sleep deeply"],level:"easy",example:"The prisoner tried to escape."},
{word:"Fall",pos:"verb",correct:"Move downward without control; decrease in level",options:["Rise upward; increase in level","Stand still completely","Sleep deeply"],level:"easy",example:"Leaves fall from trees in autumn."},
{word:"Feed",pos:"verb",correct:"Give food to; supply with material",options:["Starve or take food away from","Run very fast","Sleep deeply"],level:"easy",example:"Feed the dog twice a day."},
{word:"Feel",pos:"verb",correct:"Be aware of through the senses or emotions",options:["Be completely unaware of sensation","Run very fast","Sleep deeply"],level:"easy",example:"I feel happy today."},
{word:"Fight",pos:"verb",correct:"Take part in a violent struggle or conflict",options:["Surrender and submit peacefully","Run very fast","Sleep deeply"],level:"easy",example:"Don't fight with your siblings."},
{word:"Fill",pos:"verb",correct:"Put enough into a container to make it full",options:["Empty a container completely","Run very fast","Sleep deeply"],level:"easy",example:"Fill the glass with water."},
{word:"Fix",pos:"verb",correct:"Repair; fasten securely; direct attention at",options:["Break or damage something","Run very fast","Sleep deeply"],level:"easy",example:"Can you fix the broken chair?"},
{word:"Fly",pos:"verb",correct:"Move through the air; travel by aircraft",options:["Sink down into the ground","Stand still completely","Sleep deeply"],level:"easy",example:"Birds fly south in winter."},
{word:"Follow",pos:"verb",correct:"Go or come after; obey or act in accordance with",options:["Go ahead of or lead someone","Run very fast","Sleep deeply"],level:"easy",example:"Follow the instructions carefully."},
{word:"Forget",pos:"verb",correct:"Fail to remember; inadvertently neglect",options:["Remember something perfectly","Run very fast","Sleep deeply"],level:"easy",example:"Don't forget to lock the door."},
{word:"Freeze",pos:"verb",correct:"Turn into ice; become suddenly motionless with fear",options:["Melt and become liquid","Run very fast","Sleep deeply"],level:"easy",example:"The pond will freeze in winter."},
{word:"Get",pos:"verb",correct:"Come to have or hold; obtain; become",options:["Lose or give away something","Run very fast","Sleep deeply"],level:"easy",example:"Get a good night's sleep."},
{word:"Give",pos:"verb",correct:"Freely transfer the possession of something to another",options:["Take something away from another","Run very fast","Sleep deeply"],level:"easy",example:"Give the book back when done."},
{word:"Grow",pos:"verb",correct:"Increase in size or amount; cultivate plants",options:["Shrink and decrease in size","Run very fast","Sleep deeply"],level:"easy",example:"Children grow fast."},
{word:"Guess",pos:"verb",correct:"Estimate or suppose without certain knowledge",options:["Know something with complete certainty","Run very fast","Sleep deeply"],level:"easy",example:"Can you guess my age?"},
{word:"Help",pos:"verb",correct:"Make it easier for someone to do something",options:["Make things harder for someone","Run very fast","Sleep deeply"],level:"easy",example:"She helped her friend move."},
{word:"Hide",pos:"verb",correct:"Put or keep out of sight; conceal oneself",options:["Display or reveal openly","Run very fast","Sleep deeply"],level:"easy",example:"The children love to hide."},
{word:"Hit",pos:"verb",correct:"Strike with a hand or implement; reach a target",options:["Miss and fail to make contact","Run very fast","Sleep deeply"],level:"easy",example:"He hit the ball over the fence."},
{word:"Hold",pos:"verb",correct:"Grip, carry, or support something",options:["Release and let go of something","Run very fast","Sleep deeply"],level:"easy",example:"Hold my hand while we cross."},
{word:"Hurt",pos:"verb",correct:"Cause physical pain or emotional distress to",options:["Heal and bring comfort to someone","Run very fast","Sleep deeply"],level:"easy",example:"Be careful not to hurt yourself."},
{word:"Keep",pos:"verb",correct:"Retain possession of; continue doing something",options:["Discard and give away something","Run very fast","Sleep deeply"],level:"easy",example:"Keep this secret between us."},
{word:"Kill",pos:"verb",correct:"Cause the death of; put an end to",options:["Give life to or revive something","Run very fast","Sleep deeply"],level:"easy",example:"Frost can kill delicate plants."},
{word:"Kiss",pos:"verb",correct:"Touch with the lips as a greeting or expression of love",options:["Ignore completely and turn away","Run very fast","Sleep deeply"],level:"easy",example:"She kissed her child goodnight."},
{word:"Know",pos:"verb",correct:"Be aware of through experience or information",options:["Be completely unaware or ignorant","Run very fast","Sleep deeply"],level:"easy",example:"Do you know the answer?"},
{word:"Laugh",pos:"verb",correct:"Express amusement by making sounds and movements",options:["Express sadness by crying quietly","Run very fast","Sleep deeply"],level:"easy",example:"They laughed at the funny joke."},
{word:"Leave",pos:"verb",correct:"Go away from a place; allow to remain",options:["Stay and remain in a place","Run very fast","Sleep deeply"],level:"easy",example:"She had to leave early."},
{word:"Lift",pos:"verb",correct:"Raise to a higher position or level",options:["Lower to a less high position","Run very fast","Sleep deeply"],level:"easy",example:"Lift the box carefully."},
{word:"Listen",pos:"verb",correct:"Give attention to a sound; pay attention to someone",options:["Ignore all sounds around you","Run very fast","Sleep deeply"],level:"easy",example:"Listen carefully to the instructions."},
{word:"Live",pos:"verb",correct:"Remain alive; have one's home in a place",options:["Die or cease to exist","Run very fast","Sleep deeply"],level:"easy",example:"They live near the park."},
{word:"Look",pos:"verb",correct:"Direct eyes toward something; appear to be",options:["Close eyes and ignore surroundings","Run very fast","Sleep deeply"],level:"easy",example:"Look both ways before crossing."},
{word:"Lose",pos:"verb",correct:"No longer have something; fail to win",options:["Successfully retain or win something","Run very fast","Sleep deeply"],level:"easy",example:"Try not to lose your keys again."},
{word:"Love",pos:"verb",correct:"Feel deep affection or attachment for someone",options:["Feel deep hatred toward someone","Run very fast","Sleep deeply"],level:"easy",example:"She loves her family deeply."},
{word:"Make",pos:"verb",correct:"Form by putting parts together; cause to be",options:["Destroy or take apart completely","Run very fast","Sleep deeply"],level:"easy",example:"Make yourself at home."},
{word:"Meet",pos:"verb",correct:"Come into the presence of someone; encounter",options:["Avoid and evade someone","Run very fast","Sleep deeply"],level:"easy",example:"Let's meet for coffee."},
{word:"Miss",pos:"verb",correct:"Fail to catch, see, or be present for",options:["Successfully catch or arrive for","Run very fast","Sleep deeply"],level:"easy",example:"I miss my family when I travel."},
{word:"Move",pos:"verb",correct:"Change position; make progress; affect emotionally",options:["Stay completely still in place","Run very fast","Sleep deeply"],level:"easy",example:"Please move your car."},
{word:"Need",pos:"verb",correct:"Require something because it is essential",options:["Have everything and require nothing","Run very fast","Sleep deeply"],level:"easy",example:"I need more time."},
{word:"Offer",pos:"verb",correct:"Present something for acceptance or refusal",options:["Withhold and refuse to give","Run very fast","Sleep deeply"],level:"easy",example:"He offered to help with the dishes."},
{word:"Order",pos:"verb",correct:"Give an instruction; request something commercially",options:["Cancel and retract a request","Run very fast","Sleep deeply"],level:"easy",example:"Order your food before the kitchen closes."},
{word:"Own",pos:"verb",correct:"Have something as one's possession",options:["Owe something to someone else","Run very fast","Sleep deeply"],level:"easy",example:"He owns two cars."},
{word:"Pack",pos:"verb",correct:"Fill a bag or box with items; press tightly together",options:["Unpack and remove items from a bag","Run very fast","Sleep deeply"],level:"easy",example:"Pack your bags the night before."},
{word:"Paint",pos:"verb",correct:"Apply paint to a surface; depict in a painting",options:["Remove all color from a surface","Run very fast","Sleep deeply"],level:"easy",example:"She painted the walls yellow."},
{word:"Pass",pos:"verb",correct:"Move past; successfully complete a test",options:["Fail and not complete a test","Stop moving completely","Sleep deeply"],level:"easy",example:"Did you pass the driving test?"},
{word:"Pay",pos:"verb",correct:"Give money in exchange for goods or services",options:["Receive money without giving anything","Run very fast","Sleep deeply"],level:"easy",example:"Don't forget to pay the bill."},
{word:"Pick",pos:"verb",correct:"Take hold of and remove something; select",options:["Put back and replace something","Run very fast","Sleep deeply"],level:"easy",example:"Pick the ripest fruit first."},
{word:"Plan",pos:"verb",correct:"Decide on and arrange in advance",options:["Act randomly without any forethought","Run very fast","Sleep deeply"],level:"easy",example:"Plan your day the evening before."},
{word:"Plant",pos:"verb",correct:"Place in the ground to grow; put in a fixed position",options:["Uproot and remove from the ground","Run very fast","Sleep deeply"],level:"easy",example:"Plant the seeds in spring."},
{word:"Play",pos:"verb",correct:"Engage in activity for enjoyment; perform music",options:["Work seriously without any fun","Run very fast","Sleep deeply"],level:"easy",example:"Children need time to play."},
{word:"Point",pos:"verb",correct:"Direct attention toward something; aim",options:["Look away from and ignore","Run very fast","Sleep deeply"],level:"easy",example:"Point to the correct answer."},
{word:"Pour",pos:"verb",correct:"Cause a liquid to flow from a container",options:["Collect liquid into a container","Run very fast","Sleep deeply"],level:"easy",example:"Pour the milk into the glass."},
{word:"Pull",pos:"verb",correct:"Exert force on something to move it toward oneself",options:["Push something away from oneself","Run very fast","Sleep deeply"],level:"easy",example:"Pull the door to open it."},
{word:"Push",pos:"verb",correct:"Exert force to move something away",options:["Pull something toward yourself","Run very fast","Sleep deeply"],level:"easy",example:"Push the button to start."},
{word:"Put",pos:"verb",correct:"Place in a specified location",options:["Remove from a location","Run very fast","Sleep deeply"],level:"easy",example:"Put the book back on the shelf."},
{word:"Reach",pos:"verb",correct:"Stretch out to touch or grasp; arrive at",options:["Retreat away from something","Run very fast","Sleep deeply"],level:"easy",example:"Reach for your goals every day."},
{word:"Relax",pos:"verb",correct:"Make or become less tense; rest",options:["Become more tense and anxious","Run very fast","Sleep deeply"],level:"easy",example:"Take time to relax on weekends."},
{word:"Repeat",pos:"verb",correct:"Say or do something again",options:["Do something only once and stop","Run very fast","Sleep deeply"],level:"easy",example:"Please repeat the instructions."},
{word:"Reply",pos:"verb",correct:"Say something in response; answer",options:["Stay silent and give no answer","Run very fast","Sleep deeply"],level:"easy",example:"Reply to the email as soon as possible."},
{word:"Rest",pos:"verb",correct:"Cease from exertion; relax or sleep",options:["Work harder without any break","Run very fast","Stand completely still"],level:"easy",example:"Rest after a long day of work."},
{word:"Return",pos:"verb",correct:"Come or go back to a place; give something back",options:["Leave and not come back","Run very fast","Sleep deeply"],level:"easy",example:"He will return tomorrow."},
{word:"Ride",pos:"verb",correct:"Sit on and control a horse, bike, or vehicle",options:["Walk beside without mounting","Run very fast","Sleep deeply"],level:"easy",example:"She rides her bicycle to school."},
{word:"Rise",pos:"verb",correct:"Move upward; increase in level",options:["Fall and move downward","Run very fast","Sleep deeply"],level:"easy",example:"The sun rises in the east."},
{word:"Roar",pos:"verb",correct:"Make a loud, deep sound; laugh loudly",options:["Make a very quiet, soft sound","Run very fast","Sleep deeply"],level:"easy",example:"The lion began to roar."},
{word:"Roll",pos:"verb",correct:"Move by turning over repeatedly; form into a cylinder",options:["Stay flat without turning","Run very fast","Sleep deeply"],level:"easy",example:"Roll the dough flat."},
{word:"Save",pos:"verb",correct:"Keep safe from harm; preserve; keep money aside",options:["Spend all money; endanger something","Run very fast","Sleep deeply"],level:"easy",example:"Save some money each month."},
{word:"Search",pos:"verb",correct:"Try to find something by looking carefully",options:["Ignore and give up looking","Run very fast","Sleep deeply"],level:"easy",example:"Search for the missing keys."},
{word:"Send",pos:"verb",correct:"Cause something to go to a destination",options:["Receive and accept something","Run very fast","Sleep deeply"],level:"easy",example:"Send me a message later."},
{word:"Shake",pos:"verb",correct:"Move quickly back and forth; tremble",options:["Stay completely still and stable","Run very fast","Sleep deeply"],level:"easy",example:"Shake the bottle before opening."},
{word:"Show",pos:"verb",correct:"Make visible; demonstrate or explain",options:["Conceal and keep hidden","Run very fast","Sleep deeply"],level:"easy",example:"Show me how it works."},
{word:"Shout",pos:"verb",correct:"Speak or call out loudly",options:["Speak in a very soft whisper","Run very fast","Sleep deeply"],level:"easy",example:"Don't shout in the library."},
{word:"Sit",pos:"verb",correct:"Rest weight on buttocks; take a seat",options:["Stand upright on both feet","Run very fast","Sleep deeply"],level:"easy",example:"Sit down and rest your feet."},
{word:"Smell",pos:"verb",correct:"Perceive or detect an odor with the nose",options:["Be unable to detect any smell","Run very fast","Sleep deeply"],level:"easy",example:"Can you smell the fresh bread?"},
{word:"Speak",pos:"verb",correct:"Say words aloud; communicate verbally",options:["Stay completely silent","Run very fast","Sleep deeply"],level:"easy",example:"Speak clearly when presenting."},
{word:"Stand",pos:"verb",correct:"Be in an upright position on the feet",options:["Lie down or sit on the ground","Run very fast","Sleep deeply"],level:"easy",example:"Stand up straight."},
{word:"Start",pos:"verb",correct:"Begin; set in motion; make a machine work",options:["End and bring to a close","Run very fast","Sleep deeply"],level:"easy",example:"Start the engine."},
{word:"Stay",pos:"verb",correct:"Remain in the same place; continue to be",options:["Leave and go somewhere else","Run very fast","Sleep deeply"],level:"easy",example:"Stay close to me in the crowd."},
{word:"Stop",pos:"verb",correct:"Cease from moving or doing; prevent",options:["Begin or continue doing something","Run very fast","Sleep deeply"],level:"easy",example:"Stop making so much noise."},
{word:"Study",pos:"verb",correct:"Devote time and attention to learning",options:["Ignore and refuse to learn anything","Run very fast","Sleep deeply"],level:"easy",example:"Study hard for your exams."},
{word:"Swim",pos:"verb",correct:"Propel the body through water by body movements",options:["Sink to the bottom of the water","Run very fast","Sleep deeply"],level:"easy",example:"She swims every morning."},
{word:"Take",pos:"verb",correct:"Lay hold of with the hands; carry with one",options:["Give and hand over to someone","Run very fast","Sleep deeply"],level:"easy",example:"Take an umbrella just in case."},
{word:"Talk",pos:"verb",correct:"Speak in order to give information or express ideas",options:["Stay silent and not communicate","Run very fast","Sleep deeply"],level:"easy",example:"We talked for hours."},
{word:"Teach",pos:"verb",correct:"Impart knowledge to; instruct someone",options:["Learn from someone else","Run very fast","Sleep deeply"],level:"easy",example:"She teaches mathematics at school."},
{word:"Tell",pos:"verb",correct:"Communicate information to someone; instruct",options:["Withhold information from someone","Run very fast","Sleep deeply"],level:"easy",example:"Tell me what happened."},
{word:"Touch",pos:"verb",correct:"Come into contact with; affect emotionally",options:["Avoid any contact with something","Run very fast","Sleep deeply"],level:"easy",example:"Don't touch the wet paint."},
{word:"Travel",pos:"verb",correct:"Make a journey; move from one place to another",options:["Stay permanently in one place","Run very fast","Sleep deeply"],level:"easy",example:"She loves to travel the world."},
{word:"Try",pos:"verb",correct:"Make an attempt or effort to do something",options:["Make no attempt whatsoever","Run very fast","Sleep deeply"],level:"easy",example:"Try your best at everything."},
{word:"Turn",pos:"verb",correct:"Move in a circular direction; change direction",options:["Move in a straight line only","Run very fast","Sleep deeply"],level:"easy",example:"Turn left at the corner."},
{word:"Use",pos:"verb",correct:"Take, hold, or deploy something for a purpose",options:["Discard and refuse to deploy","Run very fast","Sleep deeply"],level:"easy",example:"Use your time wisely."},
{word:"Visit",pos:"verb",correct:"Go to see a person or place",options:["Avoid and stay away from a place","Run very fast","Sleep deeply"],level:"easy",example:"Visit your grandparents this weekend."},
{word:"Wait",pos:"verb",correct:"Stay in one place until an event happens",options:["Leave immediately without pausing","Run very fast","Sleep deeply"],level:"easy",example:"Wait for me outside."},
{word:"Walk",pos:"verb",correct:"Move at a regular pace by lifting and setting down feet",options:["Stay completely still without moving","Run very fast","Sleep deeply"],level:"easy",example:"Walk to the park for exercise."},
{word:"Want",pos:"verb",correct:"Have a desire to possess or do something",options:["Have no desire for anything","Run very fast","Sleep deeply"],level:"easy",example:"I want to learn to paint."},
{word:"Wash",pos:"verb",correct:"Clean with water and soap",options:["Dirty or soil something","Run very fast","Sleep deeply"],level:"easy",example:"Wash your hands before eating."},
{word:"Watch",pos:"verb",correct:"Look at attentively; be careful about",options:["Ignore and pay no attention to","Run very fast","Sleep deeply"],level:"easy",example:"Watch the clock during the exam."},
{word:"Win",pos:"verb",correct:"Achieve first place or victory in a contest",options:["Lose a contest or competition","Run very fast","Sleep deeply"],level:"easy",example:"She worked hard to win the award."},
{word:"Wish",pos:"verb",correct:"Want something that cannot easily happen",options:["Be content with what you have","Run very fast","Sleep deeply"],level:"easy",example:"I wish I could fly."},
{word:"Work",pos:"verb",correct:"Be engaged in a task; function properly",options:["Rest and do no activity","Run very fast","Sleep deeply"],level:"easy",example:"Work hard and be patient."},
{word:"Abrupt",pos:"adjective",correct:"Sudden and unexpected; brief to the point of rudeness",options:["Very gradual and expected","Extremely quiet","Very slow"],level:"moderate",example:"His abrupt departure surprised everyone."},
{word:"Acrid",pos:"adjective",correct:"Having an unpleasantly bitter or pungent smell",options:["Having a sweet and pleasant scent","Very loud","Extremely fast"],level:"moderate",example:"The acrid smoke filled the room."},
{word:"Acute",pos:"adjective",correct:"Present to a severe degree; having a sharp intellect",options:["Mild and not severe","Extremely dull","Very slow"],level:"moderate",example:"She had an acute sense of smell."},
{word:"Adamant",pos:"adjective",correct:"Refusing to be persuaded; insistently firm",options:["Very easily persuaded and flexible","Extremely quiet","Very fast"],level:"moderate",example:"He was adamant about not leaving."},
{word:"Adept",pos:"adjective",correct:"Very skilled or proficient at something",options:["Completely unskilled and incompetent","Very loud","Extremely slow"],level:"moderate",example:"She is adept at solving puzzles."},
{word:"Adverse",pos:"adjective",correct:"Preventing success; harmful; unfavorable",options:["Very beneficial and favorable","Extremely quiet","Very fast"],level:"moderate",example:"Adverse weather delayed the flight."},
{word:"Affable",pos:"adjective",correct:"Friendly, good-natured, and easy to talk to",options:["Unfriendly and difficult to approach","Very loud","Extremely fast"],level:"moderate",example:"The affable host greeted every guest."},
{word:"Aggrieved",pos:"adjective",correct:"Feeling resentment because of unfair treatment",options:["Feeling very content and treated fairly","Very loud","Extremely fast"],level:"moderate",example:"She felt aggrieved by the unfair decision."},
{word:"Aloof",pos:"adjective",correct:"Not friendly or forthcoming; cool and distant",options:["Very warm, friendly, and welcoming","Extremely loud","Very fast"],level:"moderate",example:"He remained aloof from the group."},
{word:"Altruistic",pos:"adjective",correct:"Showing a selfless concern for others' well-being",options:["Showing selfish concern only for oneself","Very loud","Extremely fast"],level:"moderate",example:"Her altruistic acts helped many people."},
{word:"Amiable",pos:"adjective",correct:"Having a friendly and pleasant manner",options:["Having an unfriendly and unpleasant manner","Very loud","Extremely fast"],level:"moderate",example:"She was an amiable and easy-going person."},
{word:"Apprehensive",pos:"adjective",correct:"Anxious or fearful about a future event",options:["Confident and looking forward to events","Very loud","Extremely fast"],level:"moderate",example:"He was apprehensive about the surgery."},
{word:"Apt",pos:"adjective",correct:"Appropriate or suitable in the circumstances",options:["Completely inappropriate or unsuitable","Very loud","Extremely fast"],level:"moderate",example:"She made an apt remark."},
{word:"Ardent",pos:"adjective",correct:"Enthusiastic or passionate about something",options:["Completely unenthusiastic and apathetic","Very loud","Extremely fast"],level:"moderate",example:"He is an ardent supporter of the arts."},
{word:"Arduous",pos:"adjective",correct:"Involving strenuous effort; difficult and tiring",options:["Very easy and effortless","Extremely loud","Very fast"],level:"moderate",example:"Climbing the mountain was arduous."},
{word:"Articulate",pos:"adjective",correct:"Having or showing the ability to speak fluently",options:["Unable to express oneself clearly","Very loud","Extremely fast"],level:"moderate",example:"She is an articulate and confident speaker."},
{word:"Astute",pos:"adjective",correct:"Having an ability to assess situations shrewdly",options:["Very naive and easily fooled","Extremely loud","Very fast"],level:"moderate",example:"An astute investor spotted the opportunity."},
{word:"Audacious",pos:"adjective",correct:"Showing a willingness to take bold risks",options:["Very timid and risk-averse","Extremely quiet","Very slow"],level:"moderate",example:"It was an audacious plan."},
{word:"Austere",pos:"adjective",correct:"Severe or strict in manner; having no luxuries",options:["Very luxurious and indulgent","Extremely loud","Very fast"],level:"moderate",example:"He led an austere monastic life."},
{word:"Avant-garde",pos:"adjective",correct:"New and experimental in style; pioneering",options:["Traditional and conventional in style","Very loud","Extremely slow"],level:"moderate",example:"Her paintings were considered avant-garde."},
{word:"Banal",pos:"adjective",correct:"So lacking in originality as to be obvious and boring",options:["Very original and fascinating","Extremely loud","Very fast"],level:"moderate",example:"The film had a banal plot."},
{word:"Blatant",pos:"adjective",correct:"Done openly and unashamedly; very obvious",options:["Done secretly and subtly","Extremely quiet","Very slow"],level:"moderate",example:"It was a blatant lie."},
{word:"Bleak",pos:"adjective",correct:"Bare and exposed; lacking hope; cold and miserable",options:["Full of warmth, hope, and promise","Extremely loud","Very fast"],level:"moderate",example:"The future looked bleak for the team."},
{word:"Brazen",pos:"adjective",correct:"Bold and without shame",options:["Very shy and full of shame","Extremely quiet","Very slow"],level:"moderate",example:"The brazen thief stole in broad daylight."},
{word:"Brusque",pos:"adjective",correct:"Abrupt in manner; somewhat rude",options:["Very polite and considerate","Extremely quiet","Very slow"],level:"moderate",example:"His brusque reply upset her."},
{word:"Buoyant",pos:"adjective",correct:"Cheerful and optimistic; able to float",options:["Gloomy and pessimistic; sinking","Extremely loud","Very fast"],level:"moderate",example:"She had a buoyant, energetic personality."},
{word:"Callous",pos:"adjective",correct:"Showing an insensitive disregard for others",options:["Showing great compassion and care","Extremely loud","Very fast"],level:"moderate",example:"His callous remark hurt her feelings."},
{word:"Capricious",pos:"adjective",correct:"Changing moods or behavior unpredictably",options:["Very consistent and predictable","Extremely loud","Very fast"],level:"moderate",example:"Her capricious decisions confused the team."},
{word:"Censorious",pos:"adjective",correct:"Severely critical of others",options:["Very accepting and non-judgmental","Extremely loud","Very fast"],level:"moderate",example:"The censorious critic panned every film."},
{word:"Circumspect",pos:"adjective",correct:"Wary and unwilling to take risks; cautious",options:["Very reckless and impulsive","Extremely loud","Very fast"],level:"moderate",example:"Be circumspect with your finances."},
{word:"Clandestine",pos:"adjective",correct:"Kept secret or done secretly",options:["Completely open and public","Extremely loud","Very fast"],level:"moderate",example:"They held a clandestine meeting."},
{word:"Cogent",pos:"adjective",correct:"Clear, logical, and convincing",options:["Unclear, illogical, and unconvincing","Very loud","Extremely fast"],level:"moderate",example:"She made a cogent argument."},
{word:"Complacent",pos:"adjective",correct:"Showing uncritical satisfaction with oneself",options:["Very aware of one's shortcomings","Extremely loud","Very fast"],level:"moderate",example:"Don't become complacent after early success."},
{word:"Conceited",pos:"adjective",correct:"Excessively proud of oneself; vain",options:["Very humble and self-deprecating","Extremely loud","Very fast"],level:"moderate",example:"He was too conceited to admit mistakes."},
{word:"Congenial",pos:"adjective",correct:"Pleasant and suited to one's taste or nature",options:["Unpleasant and unsuitable","Very loud","Extremely fast"],level:"moderate",example:"They had a congenial conversation."},
{word:"Contrite",pos:"adjective",correct:"Feeling genuine regret and remorse for wrongdoing",options:["Feeling no guilt or remorse at all","Very loud","Extremely fast"],level:"moderate",example:"She was contrite after her outburst."},
{word:"Convoluted",pos:"adjective",correct:"Extremely complex and difficult to follow",options:["Very simple and straightforward","Extremely loud","Very fast"],level:"moderate",example:"The convoluted instructions confused users."},
{word:"Cordial",pos:"adjective",correct:"Warm and friendly; heartfelt",options:["Cold and unfriendly","Extremely loud","Very fast"],level:"moderate",example:"They had a cordial relationship."},
{word:"Cryptic",pos:"adjective",correct:"Having a meaning that is mysterious or obscure",options:["Very clear and easy to understand","Extremely loud","Very fast"],level:"moderate",example:"He left a cryptic message."},
{word:"Cunning",pos:"adjective",correct:"Having or showing skill in achieving goals by deceit",options:["Very honest and straightforward","Extremely loud","Very fast"],level:"moderate",example:"The cunning fox outsmarted the hound."},
{word:"Cynical",pos:"adjective",correct:"Believing people are motivated by self-interest",options:["Very trusting and idealistic","Extremely loud","Very fast"],level:"moderate",example:"He was cynical about politics."},
{word:"Daunting",pos:"adjective",correct:"Seeming difficult to deal with; intimidating",options:["Very easy and encouraging","Extremely loud","Very fast"],level:"moderate",example:"The daunting task took weeks to complete."},
{word:"Debilitating",pos:"adjective",correct:"Making someone very weak and infirm",options:["Making someone very strong","Extremely loud","Very fast"],level:"moderate",example:"The injury had a debilitating effect."},
{word:"Deceptive",pos:"adjective",correct:"Giving a false impression; misleading",options:["Completely honest and transparent","Very loud","Extremely fast"],level:"moderate",example:"His calm appearance was deceptive."},
{word:"Defiant",pos:"adjective",correct:"Showing open resistance; bold disobedience",options:["Very obedient and compliant","Extremely loud","Very fast"],level:"moderate",example:"The defiant child refused to apologize."},
{word:"Deft",pos:"adjective",correct:"Neatly skillful and quick in movement",options:["Clumsy and slow in movement","Extremely loud","Very fast"],level:"moderate",example:"She made a deft catch."},
{word:"Dejected",pos:"adjective",correct:"Sad and depressed; dispirited",options:["Very happy and energetic","Extremely loud","Very fast"],level:"moderate",example:"He felt dejected after losing."},
{word:"Desolate",pos:"adjective",correct:"Deserted and bleak; feeling hopeless",options:["Full of life and hope","Extremely loud","Very fast"],level:"moderate",example:"The desolate landscape stretched for miles."},
{word:"Devious",pos:"adjective",correct:"Showing a skillful use of underhanded tactics",options:["Very straightforward and honest","Extremely loud","Very fast"],level:"moderate",example:"She used devious tricks to win."},
{word:"Didactic",pos:"adjective",correct:"Intended to teach, particularly in an excessive way",options:["Having no educational intent at all","Very loud","Extremely fast"],level:"moderate",example:"His didactic tone annoyed the audience."},
{word:"Diplomatic",pos:"adjective",correct:"Skilled in dealing with sensitive situations tactfully",options:["Very clumsy in handling situations","Extremely loud","Very fast"],level:"moderate",example:"A diplomatic response prevented conflict."},
{word:"Discordant",pos:"adjective",correct:"Disagreeing or incongruous; harsh-sounding",options:["Very agreeable and harmonious","Extremely quiet","Very slow"],level:"moderate",example:"There was a discordant note in the music."},
{word:"Disdainful",pos:"adjective",correct:"Showing contempt or lack of respect",options:["Showing great admiration and respect","Very loud","Extremely fast"],level:"moderate",example:"She gave him a disdainful look."},
{word:"Docile",pos:"adjective",correct:"Ready to accept control; submissive; easily taught",options:["Completely uncontrollable and wild","Very loud","Extremely fast"],level:"moderate",example:"The docile horse was easy to ride."},
{word:"Dominant",pos:"adjective",correct:"Having power and influence over others; most important",options:["Having very little power or influence","Extremely loud","Very fast"],level:"moderate",example:"She was the dominant force on the team."},
{word:"Dubious",pos:"adjective",correct:"Hesitating or doubting; of questionable value",options:["Very certain and trustworthy","Extremely loud","Very fast"],level:"moderate",example:"I was dubious about his motives."},
{word:"Earnest",pos:"adjective",correct:"Sincere and serious in intention",options:["Insincere and lacking seriousness","Very loud","Extremely fast"],level:"moderate",example:"He made an earnest appeal for help."},
{word:"Eccentric",pos:"adjective",correct:"Unconventional and slightly strange",options:["Very conventional and predictable","Extremely loud","Very fast"],level:"moderate",example:"The eccentric scientist had odd habits."},
{word:"Egotistical",pos:"adjective",correct:"Excessively conceited; self-centered",options:["Very humble and other-focused","Extremely loud","Very fast"],level:"moderate",example:"His egotistical speeches annoyed people."},
{word:"Elated",pos:"adjective",correct:"Very happy and excited",options:["Very sad and despondent","Extremely loud","Very fast"],level:"moderate",example:"She was elated by the good news."},
{word:"Elusive",pos:"adjective",correct:"Difficult to find, catch, or achieve",options:["Very easy to find and catch","Extremely loud","Very fast"],level:"moderate",example:"The solution remained elusive."},
{word:"Empathetic",pos:"adjective",correct:"Showing an ability to understand others' feelings",options:["Unable to understand others' feelings","Very loud","Extremely fast"],level:"moderate",example:"An empathetic leader listens first."},
{word:"Enigmatic",pos:"adjective",correct:"Difficult to interpret or understand; mysterious",options:["Very open and easy to understand","Extremely loud","Very fast"],level:"moderate",example:"Her smile was enigmatic."},
{word:"Equitable",pos:"adjective",correct:"Fair and impartial; just",options:["Unfair and heavily biased","Extremely loud","Very fast"],level:"moderate",example:"An equitable distribution of resources matters."},
{word:"Erratic",pos:"adjective",correct:"Not regular or consistent; unpredictable",options:["Very regular and consistent","Extremely loud","Very fast"],level:"moderate",example:"His erratic behavior worried everyone."},
{word:"Exemplary",pos:"adjective",correct:"Serving as a desirable model; representing best practice",options:["Serving as a warning of bad practice","Extremely loud","Very fast"],level:"moderate",example:"Her exemplary work won an award."},
{word:"Exhaustive",pos:"adjective",correct:"Including all aspects; thorough and complete",options:["Very incomplete and superficial","Extremely loud","Very fast"],level:"moderate",example:"She conducted an exhaustive review."},
{word:"Exuberant",pos:"adjective",correct:"Filled with lively energy and excitement",options:["Very dull and lacking energy","Extremely quiet","Very slow"],level:"moderate",example:"The exuberant crowd cheered loudly."},
{word:"Facetious",pos:"adjective",correct:"Treating serious issues with inappropriate humor",options:["Very serious and solemn","Extremely loud","Very fast"],level:"moderate",example:"His facetious comments were out of place."},
{word:"Fastidious",pos:"adjective",correct:"Very attentive to accuracy and detail; hard to please",options:["Very careless and easily satisfied","Extremely loud","Very fast"],level:"moderate",example:"She was fastidious about cleanliness."},
{word:"Fickle",pos:"adjective",correct:"Changing frequently; not reliable in loyalty",options:["Very consistent and loyal","Extremely loud","Very fast"],level:"moderate",example:"Her fickle moods made her unpredictable."},
{word:"Flippant",pos:"adjective",correct:"Not showing a serious attitude; treating lightly",options:["Very serious and thoughtful","Extremely loud","Very fast"],level:"moderate",example:"He gave a flippant answer to a serious question."},
{word:"Forthright",pos:"adjective",correct:"Direct and outspoken; straightforward",options:["Very indirect and evasive","Extremely loud","Very fast"],level:"moderate",example:"She was forthright about her opinions."},
{word:"Futile",pos:"adjective",correct:"Having no useful result; pointless",options:["Very effective and worthwhile","Extremely loud","Very fast"],level:"moderate",example:"Further protest seemed futile."},
{word:"Genial",pos:"adjective",correct:"Friendly and cheerful; pleasant",options:["Unfriendly and miserable","Extremely loud","Very fast"],level:"moderate",example:"The genial host made everyone comfortable."},
{word:"Grandiose",pos:"adjective",correct:"Impressive and imposing in appearance; pompous",options:["Very modest and understated","Extremely loud","Very fast"],level:"moderate",example:"He had grandiose ideas about the project."},
{word:"Gregarious",pos:"adjective",correct:"Fond of company; sociable",options:["Very unsociable and solitary","Extremely loud","Very fast"],level:"moderate",example:"She is gregarious and loves gatherings."},
{word:"Guarded",pos:"adjective",correct:"Cautious and having reservations; protective",options:["Very open and unprotected","Extremely loud","Very fast"],level:"moderate",example:"He gave a guarded response."},
{word:"Harrowing",pos:"adjective",correct:"Intensely distressing; acutely painful",options:["Very pleasant and comforting","Extremely loud","Very fast"],level:"moderate",example:"It was a harrowing experience."},
{word:"Haughty",pos:"adjective",correct:"Arrogantly superior and disdainful",options:["Very modest and down-to-earth","Extremely loud","Very fast"],level:"moderate",example:"The haughty aristocrat looked down on others."},
{word:"Headstrong",pos:"adjective",correct:"Energetically self-willed; obstinate",options:["Very easily led and compliant","Extremely loud","Very fast"],level:"moderate",example:"Her headstrong nature caused conflicts."},
{word:"Hesitant",pos:"adjective",correct:"Tentative; unsure; slow to act",options:["Very decisive and quick to act","Extremely loud","Very fast"],level:"moderate",example:"She was hesitant to speak up."},
{word:"Hilarious",pos:"adjective",correct:"Extremely funny; causing a lot of laughter",options:["Completely unfunny and dull","Extremely loud","Very fast"],level:"moderate",example:"The comedian's show was hilarious."},
{word:"Hypocritical",pos:"adjective",correct:"Behaving in a way that contradicts what one claims",options:["Very consistent and honest in behavior","Extremely loud","Very fast"],level:"moderate",example:"It was hypocritical to preach honesty while lying."},
{word:"Idealistic",pos:"adjective",correct:"Guided by ideals; unrealistically optimistic",options:["Very pragmatic and realistic","Extremely loud","Very fast"],level:"moderate",example:"Young people are often idealistic."},
{word:"Impartial",pos:"adjective",correct:"Treating all rivals or disputants equally; fair",options:["Clearly biased in favor of one side","Very loud","Extremely fast"],level:"moderate",example:"The judge must be impartial."},
{word:"Impetuous",pos:"adjective",correct:"Acting without thinking; done quickly and without care",options:["Very thoughtful and deliberate","Extremely loud","Very fast"],level:"moderate",example:"His impetuous decision cost him money."},
{word:"Incisive",pos:"adjective",correct:"Intelligently analytical and clear-thinking",options:["Vague and lacking clear analysis","Extremely loud","Very fast"],level:"moderate",example:"She gave an incisive critique."},
{word:"Incompetent",pos:"adjective",correct:"Not having the ability to do something successfully",options:["Highly skilled and capable","Extremely loud","Very fast"],level:"moderate",example:"The incompetent manager lost the account."},
{word:"Indulgent",pos:"adjective",correct:"Allowing too much freedom; lenient; self-gratifying",options:["Very strict and self-denying","Extremely loud","Very fast"],level:"moderate",example:"An indulgent parent spoils their child."},
{word:"Inquisitive",pos:"adjective",correct:"Having or showing interest in learning things; curious",options:["Very uninterested in learning","Extremely loud","Very fast"],level:"moderate",example:"The inquisitive student asked many questions."},
{word:"Insatiable",pos:"adjective",correct:"Impossible to satisfy; always wanting more",options:["Very easily satisfied with little","Extremely loud","Very fast"],level:"moderate",example:"She had an insatiable thirst for knowledge."},
{word:"Intrepid",pos:"adjective",correct:"Fearless and adventurous; bold",options:["Very fearful and cowardly","Extremely loud","Very fast"],level:"moderate",example:"The intrepid explorer crossed the desert."},
{word:"Irate",pos:"adjective",correct:"Feeling or showing extreme anger",options:["Very calm and untroubled","Extremely quiet","Very slow"],level:"moderate",example:"The irate customer demanded a refund."},
{word:"Irreverent",pos:"adjective",correct:"Showing a lack of respect for serious matters",options:["Very respectful of serious matters","Extremely loud","Very fast"],level:"moderate",example:"His irreverent humor shocked some."},
{word:"Languid",pos:"adjective",correct:"Having little energy; weak and lacking vitality",options:["Full of energy and vitality","Extremely loud","Very fast"],level:"moderate",example:"She felt languid in the summer heat."},
{word:"Lethargic",pos:"adjective",correct:"Affected by lethargy; sluggish and apathetic",options:["Very energetic and enthusiastic","Extremely loud","Very fast"],level:"moderate",example:"The hot weather made him lethargic."},
{word:"Lucid",pos:"adjective",correct:"Expressed clearly; easy to understand",options:["Very confusing and unclear","Extremely loud","Very fast"],level:"moderate",example:"She gave a lucid explanation of the concept."},
{word:"Ludicrous",pos:"adjective",correct:"So foolish or unreasonable as to be laughable",options:["Very reasonable and sensible","Extremely loud","Very fast"],level:"moderate",example:"The idea seemed ludicrous at first."},
{word:"Magnanimous",pos:"adjective",correct:"Generous or forgiving, especially to a rival",options:["Very petty and unforgiving","Extremely loud","Very fast"],level:"moderate",example:"The magnanimous leader forgave his opponents."},
{word:"Melancholy",pos:"adjective",correct:"Having a feeling of pensive sadness",options:["Full of joy and happiness","Extremely loud","Very fast"],level:"moderate",example:"She had a melancholy expression."},
{word:"Methodical",pos:"adjective",correct:"Done according to a systematic or established procedure",options:["Done randomly without any system","Extremely loud","Very fast"],level:"moderate",example:"He was methodical in his research."},
{word:"Mundane",pos:"adjective",correct:"Lacking interest or excitement; dull and ordinary",options:["Very exciting and extraordinary","Extremely loud","Very fast"],level:"moderate",example:"She found her mundane job tedious."},
{word:"Naive",pos:"adjective",correct:"Showing a lack of experience or judgment",options:["Very experienced and worldly-wise","Extremely loud","Very fast"],level:"moderate",example:"It was naive to trust a stranger."},
{word:"Nonchalant",pos:"adjective",correct:"Feeling or appearing casually calm and relaxed",options:["Very anxious and clearly worried","Extremely loud","Very fast"],level:"moderate",example:"He was nonchalant about the danger."},
{word:"Oblivious",pos:"adjective",correct:"Not aware of what is happening around one",options:["Very alert and aware of surroundings","Extremely loud","Very fast"],level:"moderate",example:"She was oblivious to the noise."},
{word:"Obstinate",pos:"adjective",correct:"Stubbornly refusing to change opinion",options:["Very willing to change and adapt","Extremely loud","Very fast"],level:"moderate",example:"He was obstinate in his views."},
{word:"Officious",pos:"adjective",correct:"Asserting authority in an annoying way; meddlesome",options:["Very unassertive and uninvolved","Extremely loud","Very fast"],level:"moderate",example:"The officious clerk demanded more paperwork."},
{word:"Opulent",pos:"adjective",correct:"Ostentatiously rich and luxurious",options:["Very poor and bare","Extremely loud","Very fast"],level:"moderate",example:"The opulent hotel had marble floors."},
{word:"Ostensible",pos:"adjective",correct:"Stated or appearing to be true, but not necessarily",options:["Actually and genuinely true","Extremely loud","Very fast"],level:"moderate",example:"The ostensible reason was budget cuts."},
{word:"Overzealous",pos:"adjective",correct:"Too enthusiastic or fanatical about something",options:["Very unenthusiastic and indifferent","Extremely loud","Very fast"],level:"moderate",example:"His overzealous manner annoyed colleagues."},
{word:"Pedantic",pos:"adjective",correct:"Excessively focused on minor details and rules",options:["Very casual about rules and details","Extremely loud","Very fast"],level:"moderate",example:"His pedantic corrections were irritating."},
{word:"Perilous",pos:"adjective",correct:"Full of danger or risk",options:["Completely safe and risk-free","Extremely loud","Very fast"],level:"moderate",example:"The mountaineers faced a perilous climb."},
{word:"Pertinent",pos:"adjective",correct:"Relevant or applicable to a particular matter",options:["Completely irrelevant to the matter","Extremely loud","Very fast"],level:"moderate",example:"Please keep your questions pertinent."},
{word:"Petulant",pos:"adjective",correct:"Childishly sulky or bad-tempered",options:["Very mature and good-tempered","Extremely loud","Very fast"],level:"moderate",example:"The petulant child stamped her feet."},
{word:"Pious",pos:"adjective",correct:"Devoutly religious; making a show of virtue",options:["Completely irreligious and worldly","Extremely loud","Very fast"],level:"moderate",example:"The pious monk spent hours in prayer."},
{word:"Pompous",pos:"adjective",correct:"Affectedly grand or important; arrogant",options:["Very humble and unassuming","Extremely loud","Very fast"],level:"moderate",example:"His pompous speech bored the audience."},
{word:"Pretentious",pos:"adjective",correct:"Attempting to impress by affecting greater importance",options:["Very genuine and unpretentious","Extremely loud","Very fast"],level:"moderate",example:"The pretentious artist talked about himself constantly."},
{word:"Prolific",pos:"adjective",correct:"Producing many works, results, or offspring",options:["Producing very little output","Extremely loud","Very fast"],level:"moderate",example:"She was a prolific author."},
{word:"Remorseful",pos:"adjective",correct:"Filled with deep regret for wrongdoing",options:["Feeling no guilt or regret","Extremely loud","Very fast"],level:"moderate",example:"He was remorseful for his actions."},
{word:"Reticent",pos:"adjective",correct:"Not revealing one's thoughts; reserved",options:["Very open and talkative","Extremely loud","Very fast"],level:"moderate",example:"She was reticent about her past."},
{word:"Reverent",pos:"adjective",correct:"Feeling or showing deep respect",options:["Very disrespectful and irreverent","Extremely loud","Very fast"],level:"moderate",example:"They spoke in reverent tones."},
{word:"Ruthless",pos:"adjective",correct:"Having no pity or compassion for others",options:["Very compassionate and merciful","Extremely loud","Very fast"],level:"moderate",example:"The ruthless competitor used every advantage."},
{word:"Sagacious",pos:"adjective",correct:"Having good judgment and practical wisdom",options:["Very unwise and poor in judgment","Extremely loud","Very fast"],level:"moderate",example:"A sagacious leader listens before acting."},
{word:"Sarcastic",pos:"adjective",correct:"Marking by the use of bitter or cutting irony",options:["Very sincere and free of irony","Extremely loud","Very fast"],level:"moderate",example:"Her sarcastic tone was hard to miss."},
{word:"Satirical",pos:"adjective",correct:"Relating to the use of humor to expose foolishness",options:["Very serious and earnest in tone","Extremely loud","Very fast"],level:"moderate",example:"The show was a satirical take on politics."},
{word:"Sedentary",pos:"adjective",correct:"Requiring sitting for long periods; inactive",options:["Very active and always moving","Extremely loud","Very fast"],level:"moderate",example:"A sedentary lifestyle can harm health."},
{word:"Shrewd",pos:"adjective",correct:"Having sharp powers of judgment; astute",options:["Very gullible and poor in judgment","Extremely loud","Very fast"],level:"moderate",example:"She was a shrewd negotiator."},
{word:"Sinister",pos:"adjective",correct:"Giving the impression that something evil is present",options:["Giving a reassuring, innocent impression","Extremely loud","Very fast"],level:"moderate",example:"The sinister villain laughed darkly."},
{word:"Solemn",pos:"adjective",correct:"Formal and dignified; not cheerful",options:["Very light-hearted and cheerful","Extremely loud","Very fast"],level:"moderate",example:"The memorial was a solemn occasion."},
{word:"Sophisticated",pos:"adjective",correct:"Having refined tastes; complex and subtle",options:["Very unsophisticated and basic","Extremely loud","Very fast"],level:"moderate",example:"She had sophisticated taste in art."},
{word:"Sordid",pos:"adjective",correct:"Involving morally distasteful actions; very dirty",options:["Very moral, clean, and honorable","Extremely loud","Very fast"],level:"moderate",example:"The sordid details were shocking."},
{word:"Spirited",pos:"adjective",correct:"Full of energy, enthusiasm, and determination",options:["Very lifeless and lacking enthusiasm","Extremely loud","Very fast"],level:"moderate",example:"She gave a spirited defense of her work."},
{word:"Spontaneous",pos:"adjective",correct:"Performed without premeditation; natural",options:["Carefully planned and premeditated","Extremely loud","Very fast"],level:"moderate",example:"A spontaneous trip to the beach was fun."},
{word:"Stoic",pos:"adjective",correct:"Enduring pain without complaint; unemotional",options:["Very emotional and expressive","Extremely loud","Very fast"],level:"moderate",example:"He was stoic in the face of hardship."},
{word:"Subversive",pos:"adjective",correct:"Seeking to undermine an established system",options:["Very supportive of established systems","Extremely loud","Very fast"],level:"moderate",example:"The subversive group challenged authority."},
{word:"Sullen",pos:"adjective",correct:"Bad-tempered and sulky; gloomy",options:["Very cheerful and pleasant","Extremely loud","Very fast"],level:"moderate",example:"He sat in sullen silence."},
{word:"Supercilious",pos:"adjective",correct:"Behaving as if others are inferior; condescending",options:["Very humble toward others","Extremely loud","Very fast"],level:"moderate",example:"Her supercilious manner offended guests."},
{word:"Susceptible",pos:"adjective",correct:"Likely to be influenced or harmed by something",options:["Very resistant and not easily affected","Extremely loud","Very fast"],level:"moderate",example:"Young children are susceptible to illness."},
{word:"Temperamental",pos:"adjective",correct:"Liable to unreasonable changes of mood",options:["Very emotionally stable","Extremely loud","Very fast"],level:"moderate",example:"The temperamental artist was hard to work with."},
{word:"Tenuous",pos:"adjective",correct:"Very weak or slight; slender",options:["Very strong and solid","Extremely loud","Very fast"],level:"moderate",example:"The connection between them was tenuous."},
{word:"Terse",pos:"adjective",correct:"Sparing in the use of words; curt",options:["Very wordy and long-winded","Extremely loud","Very fast"],level:"moderate",example:"He gave a terse reply."},
{word:"Turbulent",pos:"adjective",correct:"Characterized by conflict or disorder; unstable",options:["Very calm, stable, and peaceful","Extremely loud","Very fast"],level:"moderate",example:"It was a turbulent period in history."},
{word:"Tyrannical",pos:"adjective",correct:"Exercising power in a cruel and unfair way",options:["Very fair and democratic in rule","Extremely loud","Very fast"],level:"moderate",example:"The tyrannical ruler oppressed citizens."},
{word:"Unorthodox",pos:"adjective",correct:"Contrary to what is usual, traditional, or accepted",options:["Very traditional and conventional","Extremely loud","Very fast"],level:"moderate",example:"She used unorthodox teaching methods."},
{word:"Unwieldy",pos:"adjective",correct:"Difficult to carry or manage because of size",options:["Very small and easy to handle","Extremely loud","Very fast"],level:"moderate",example:"The unwieldy package barely fit in the car."},
{word:"Vacuous",pos:"adjective",correct:"Having or showing a lack of thought or intelligence",options:["Very intelligent and thoughtful","Extremely loud","Very fast"],level:"moderate",example:"The vacuous comment added nothing to the debate."},
{word:"Valiant",pos:"adjective",correct:"Possessing or showing courage or determination",options:["Very cowardly and timid","Extremely loud","Very fast"],level:"moderate",example:"She made a valiant effort to finish."},
{word:"Verbose",pos:"adjective",correct:"Using more words than needed; wordy",options:["Very brief and to the point","Extremely loud","Very fast"],level:"moderate",example:"His verbose essay put readers to sleep."},
{word:"Vindictive",pos:"adjective",correct:"Having a strong desire for revenge",options:["Very forgiving and merciful","Extremely loud","Very fast"],level:"moderate",example:"A vindictive enemy seeks to cause harm."},
{word:"Voluble",pos:"adjective",correct:"Talking fluently, readily, or incessantly",options:["Very quiet and rarely speaking","Extremely loud","Very fast"],level:"moderate",example:"The voluble host talked all evening."},
{word:"Wistful",pos:"adjective",correct:"Having a feeling of vague longing or regret",options:["Very content and satisfied","Extremely loud","Very fast"],level:"moderate",example:"She had a wistful look in her eyes."},
{word:"Absolve",pos:"verb",correct:"Declare someone free from blame or responsibility",options:["Declare someone guilty of wrongdoing","Run very fast","Sleep deeply"],level:"moderate",example:"The court absolved him of all charges."},
{word:"Accentuate",pos:"verb",correct:"Make more noticeable or prominent",options:["Make something less noticeable","Run very fast","Sleep deeply"],level:"moderate",example:"Her dress accentuated her confidence."},
{word:"Alleviate",pos:"verb",correct:"Make suffering, deficiency, or a problem less severe",options:["Make suffering worse and more severe","Run very fast","Sleep deeply"],level:"moderate",example:"The medicine alleviated her pain."},
{word:"Amplify",pos:"verb",correct:"Increase the volume or strength of; enlarge upon",options:["Reduce the volume or strength of","Run very fast","Sleep deeply"],level:"moderate",example:"Amplify your voice to reach the audience."},
{word:"Annihilate",pos:"verb",correct:"Destroy completely",options:["Create or build something new","Run very fast","Sleep deeply"],level:"moderate",example:"The hurricane annihilated the village."},
{word:"Apprehend",pos:"verb",correct:"Arrest someone for a crime; understand something",options:["Release someone who has been caught","Run very fast","Sleep deeply"],level:"moderate",example:"Police apprehended the suspect."},
{word:"Aspire",pos:"verb",correct:"Have ambition to achieve something",options:["Have no ambition for anything","Run very fast","Sleep deeply"],level:"moderate",example:"She aspires to become a doctor."},
{word:"Besiege",pos:"verb",correct:"Surround with armed forces; overwhelm with requests",options:["Retreat from and leave alone","Run very fast","Sleep deeply"],level:"moderate",example:"Fans besieged the actor outside the theater."},
{word:"Bolster",pos:"verb",correct:"Support or strengthen; give a boost to",options:["Weaken and undermine something","Run very fast","Sleep deeply"],level:"moderate",example:"Positive feedback bolsters confidence."},
{word:"Brandish",pos:"verb",correct:"Wave or flourish something as a threat",options:["Put away and conceal something","Run very fast","Sleep deeply"],level:"moderate",example:"He brandished the sword dramatically."},
{word:"Capitulate",pos:"verb",correct:"Cease to resist an opponent; give in",options:["Fiercely resist and refuse to yield","Run very fast","Sleep deeply"],level:"moderate",example:"The army capitulated after three days."},
{word:"Circumvent",pos:"verb",correct:"Find a way around an obstacle or problem",options:["Face an obstacle head-on directly","Run very fast","Sleep deeply"],level:"moderate",example:"She circumvented the rules cleverly."},
{word:"Commemorate",pos:"verb",correct:"Recall and show respect for an event or person",options:["Forget and dishonor an event","Run very fast","Sleep deeply"],level:"moderate",example:"A statue was built to commemorate the victory."},
{word:"Compel",pos:"verb",correct:"Force or oblige someone to do something",options:["Allow someone complete freedom to choose","Run very fast","Sleep deeply"],level:"moderate",example:"Circumstances compelled him to act."},
{word:"Condone",pos:"verb",correct:"Accept or allow behavior that is considered wrong",options:["Strongly disapprove of behavior","Run very fast","Sleep deeply"],level:"moderate",example:"We cannot condone such disrespect."},
{word:"Confiscate",pos:"verb",correct:"Take or seize property with authority",options:["Return property to its rightful owner","Run very fast","Sleep deeply"],level:"moderate",example:"Teachers confiscated the phones."},
{word:"Contemplate",pos:"verb",correct:"Think deeply about something; consider doing it",options:["Avoid thinking about something","Run very fast","Sleep deeply"],level:"moderate",example:"She sat quietly to contemplate her future."},
{word:"Contradict",pos:"verb",correct:"Deny the truth of something; be contrary to",options:["Confirm and support something","Run very fast","Sleep deeply"],level:"moderate",example:"His actions contradicted his words."},
{word:"Convey",pos:"verb",correct:"Transport or carry to a place; communicate an idea",options:["Withhold and fail to communicate","Run very fast","Sleep deeply"],level:"moderate",example:"The painting conveys a sense of peace."},
{word:"Cultivate",pos:"verb",correct:"Prepare land for crops; acquire or develop a quality",options:["Neglect and allow to go to waste","Run very fast","Sleep deeply"],level:"moderate",example:"Cultivate good habits from a young age."},
{word:"Decipher",pos:"verb",correct:"Convert from code to normal text; succeed in understanding",options:["Encode into a confusing code","Run very fast","Sleep deeply"],level:"moderate",example:"Can you decipher these ancient symbols?"},
{word:"Deflect",pos:"verb",correct:"Cause to change direction; turn aside from a purpose",options:["Attract and draw toward something","Run very fast","Sleep deeply"],level:"moderate",example:"He deflected the question with a joke."},
{word:"Denounce",pos:"verb",correct:"Publicly declare to be wrong; condemn",options:["Publicly praise and endorse","Run very fast","Sleep deeply"],level:"moderate",example:"She denounced the corrupt official."},
{word:"Deplete",pos:"verb",correct:"Reduce the number or quantity of something",options:["Increase and replenish something","Run very fast","Sleep deeply"],level:"moderate",example:"Overuse depletes natural resources."},
{word:"Deprive",pos:"verb",correct:"Deny someone the possession or use of something",options:["Provide and give someone something","Run very fast","Sleep deeply"],level:"moderate",example:"They were deprived of sleep."},
{word:"Derive",pos:"verb",correct:"Obtain something from a specified source",options:["Create something with no source","Run very fast","Sleep deeply"],level:"moderate",example:"She derived pleasure from painting."},
{word:"Devastate",pos:"verb",correct:"Destroy or ruin completely; overwhelm with shock",options:["Restore and repair completely","Run very fast","Sleep deeply"],level:"moderate",example:"The earthquake devastated the town."},
{word:"Differentiate",pos:"verb",correct:"Recognize or show a distinction between things",options:["Treat everything as exactly the same","Run very fast","Sleep deeply"],level:"moderate",example:"Can you differentiate the two samples?"},
{word:"Diminish",pos:"verb",correct:"Make or become less; reduce",options:["Increase and make larger","Run very fast","Sleep deeply"],level:"moderate",example:"Pain gradually diminished over time."},
{word:"Dismantle",pos:"verb",correct:"Take to pieces; make ineffective",options:["Build and assemble completely","Run very fast","Sleep deeply"],level:"moderate",example:"Workers dismantled the old bridge."},
{word:"Dismiss",pos:"verb",correct:"Decide that something is not worth considering",options:["Give great weight and consideration","Run very fast","Sleep deeply"],level:"moderate",example:"He dismissed the idea without consideration."},
{word:"Disregard",pos:"verb",correct:"Pay no attention to; ignore",options:["Pay very close and careful attention","Run very fast","Sleep deeply"],level:"moderate",example:"She disregarded the warning signs."},
{word:"Distort",pos:"verb",correct:"Pull or twist out of shape; give a misleading account",options:["Present accurately and faithfully","Run very fast","Sleep deeply"],level:"moderate",example:"Fear can distort our perception."},
{word:"Dominate",pos:"verb",correct:"Have a commanding influence on; be the most important",options:["Submit to others' control","Run very fast","Sleep deeply"],level:"moderate",example:"She dominated every debate."},
{word:"Elude",pos:"verb",correct:"Escape from or avoid danger or pursuers cleverly",options:["Be caught and captured easily","Run very fast","Sleep deeply"],level:"moderate",example:"The suspect eluded police for weeks."},
{word:"Emerge",pos:"verb",correct:"Move out from an enclosed or dark space; become known",options:["Enter and go into a dark space","Run very fast","Sleep deeply"],level:"moderate",example:"A solution began to emerge."},
{word:"Emulate",pos:"verb",correct:"Match or surpass by imitation; try to equal",options:["Deliberately differ from and avoid","Run very fast","Sleep deeply"],level:"moderate",example:"Younger players emulate the champion."},
{word:"Encounter",pos:"verb",correct:"Unexpectedly experience or be faced with",options:["Deliberately avoid and stay away from","Run very fast","Sleep deeply"],level:"moderate",example:"We encountered problems along the way."},
{word:"Endure",pos:"verb",correct:"Suffer patiently; remain in existence",options:["Give up immediately; cease to exist","Run very fast","Sleep deeply"],level:"moderate",example:"She endured years of hardship."},
{word:"Entice",pos:"verb",correct:"Attract by offering pleasure or advantage",options:["Repel and drive away from something","Run very fast","Sleep deeply"],level:"moderate",example:"The advertisement enticed buyers."},
{word:"Eradicate",pos:"verb",correct:"Destroy completely; put an end to",options:["Protect and preserve something","Run very fast","Sleep deeply"],level:"moderate",example:"The vaccine helped eradicate the disease."},
{word:"Evade",pos:"verb",correct:"Escape from by cleverness or trickery",options:["Face directly and confront something","Run very fast","Sleep deeply"],level:"moderate",example:"He evaded the difficult question."},
{word:"Evolve",pos:"verb",correct:"Develop gradually from a simple to a more complex form",options:["Regress to a simpler form","Run very fast","Sleep deeply"],level:"moderate",example:"Languages evolve over centuries."},
{word:"Exacerbate",pos:"verb",correct:"Make a problem, bad situation, or feeling worse",options:["Make a bad situation much better","Run very fast","Sleep deeply"],level:"moderate",example:"Stress exacerbates health problems."},
{word:"Execute",pos:"verb",correct:"Carry out or put into effect a plan or order",options:["Cancel or abandon a plan","Run very fast","Sleep deeply"],level:"moderate",example:"She executed the plan flawlessly."},
{word:"Exonerate",pos:"verb",correct:"Officially absolve someone from blame",options:["Find someone guilty and punish them","Run very fast","Sleep deeply"],level:"moderate",example:"New evidence exonerated the suspect."},
{word:"Exploit",pos:"verb",correct:"Make full use of; treat unfairly for profit",options:["Neglect and fail to use something","Run very fast","Sleep deeply"],level:"moderate",example:"Companies exploit natural resources."},
{word:"Extinguish",pos:"verb",correct:"Cause a fire to stop burning; put an end to",options:["Start a fire or cause something to begin","Run very fast","Sleep deeply"],level:"moderate",example:"Firefighters extinguished the blaze."},
{word:"Forge",pos:"verb",correct:"Make by heating and hammering; create; move forward",options:["Destroy something that was created","Run very fast","Sleep deeply"],level:"moderate",example:"They forged a new partnership."},
{word:"Formulate",pos:"verb",correct:"Create or prepare methodically; express precisely",options:["Create randomly without method","Run very fast","Sleep deeply"],level:"moderate",example:"She formulated a plan to solve the crisis."},
{word:"Foster",pos:"verb",correct:"Encourage the development of something; bring up",options:["Suppress and discourage growth","Run very fast","Sleep deeply"],level:"moderate",example:"Schools should foster creativity."},
{word:"Fracture",pos:"verb",correct:"Break or crack; split apart under pressure",options:["Join and repair something broken","Run very fast","Sleep deeply"],level:"moderate",example:"He fractured his wrist in the fall."},
{word:"Frustrate",pos:"verb",correct:"Prevent from progressing; cause annoyance",options:["Help and enable progress","Run very fast","Sleep deeply"],level:"moderate",example:"Constant interruptions frustrated her."},
{word:"Garner",pos:"verb",correct:"Gather or collect something, especially information",options:["Scatter or distribute widely","Run very fast","Sleep deeply"],level:"moderate",example:"The campaign garnered widespread support."},
{word:"Hinder",pos:"verb",correct:"Create difficulties for; delay or prevent",options:["Assist and accelerate progress","Run very fast","Sleep deeply"],level:"moderate",example:"Bad weather hindered the rescue."},
{word:"Impose",pos:"verb",correct:"Force something unwelcome on someone",options:["Remove restrictions from someone","Run very fast","Sleep deeply"],level:"moderate",example:"The government imposed a curfew."},
{word:"Incite",pos:"verb",correct:"Encourage violent or unlawful behavior; stir up",options:["Calm and pacify a situation","Run very fast","Sleep deeply"],level:"moderate",example:"His speech incited the crowd to riot."},
{word:"Infer",pos:"verb",correct:"Deduce or conclude from evidence and reasoning",options:["State something explicitly and directly","Run very fast","Sleep deeply"],level:"moderate",example:"We can infer the cause from the data."},
{word:"Instill",pos:"verb",correct:"Gradually introduce a feeling or idea into someone",options:["Remove a belief or feeling from someone","Run very fast","Sleep deeply"],level:"moderate",example:"Parents instill values in children."},
{word:"Intercept",pos:"verb",correct:"Obstruct something intended for another; catch in transit",options:["Allow free and unimpeded passage","Run very fast","Sleep deeply"],level:"moderate",example:"The goalkeeper intercepted the pass."},
{word:"Intimidate",pos:"verb",correct:"Make someone timid by using threats or superior power",options:["Reassure and encourage someone greatly","Run very fast","Sleep deeply"],level:"moderate",example:"He tried to intimidate her with loud threats."},
{word:"Invoke",pos:"verb",correct:"Call on a deity for help; cite as an authority",options:["Dismiss and reject an authority","Run very fast","Sleep deeply"],level:"moderate",example:"She invoked her legal rights."},
{word:"Jeopardize",pos:"verb",correct:"Put someone or something into a situation of risk",options:["Protect someone from all risk","Run very fast","Sleep deeply"],level:"moderate",example:"His actions jeopardized the mission."},
{word:"Negate",pos:"verb",correct:"Make ineffective; nullify; deny the existence of",options:["Confirm and strengthen the effect","Run very fast","Sleep deeply"],level:"moderate",example:"One mistake negated all his effort."},
{word:"Nullify",pos:"verb",correct:"Make legally void; make of no use or effect",options:["Validate and give force to","Run very fast","Sleep deeply"],level:"moderate",example:"The judge nullified the contract."},
{word:"Obscure",pos:"verb",correct:"Keep from being seen; make unclear",options:["Make perfectly clear and visible","Run very fast","Sleep deeply"],level:"moderate",example:"Clouds obscured the mountain peak."},
{word:"Omit",pos:"verb",correct:"Leave out or exclude someone or something",options:["Include and add something deliberately","Run very fast","Sleep deeply"],level:"moderate",example:"He omitted important details from the report."},
{word:"Perpetuate",pos:"verb",correct:"Make something continue indefinitely",options:["Bring something quickly to an end","Run very fast","Sleep deeply"],level:"moderate",example:"Stereotypes perpetuate inequality."},
{word:"Plague",pos:"verb",correct:"Cause continual trouble or distress to",options:["Bring great relief and comfort to","Run very fast","Sleep deeply"],level:"moderate",example:"Back pain plagued him for years."},
{word:"Portray",pos:"verb",correct:"Depict in a work of art; describe in a certain way",options:["Misrepresent and distort intentionally","Run very fast","Sleep deeply"],level:"moderate",example:"The film portrayed life in the 1900s."},
{word:"Postulate",pos:"verb",correct:"Suggest or assume something as a fact for discussion",options:["Reject an idea before examining it","Run very fast","Sleep deeply"],level:"moderate",example:"He postulated a new theory."},
{word:"Preclude",pos:"verb",correct:"Prevent from happening; make impossible",options:["Make something very easy to happen","Run very fast","Sleep deeply"],level:"moderate",example:"Rain precluded an outdoor ceremony."},
{word:"Predominate",pos:"verb",correct:"Be the strongest or main element; have authority",options:["Be the weakest and least significant","Run very fast","Sleep deeply"],level:"moderate",example:"Western influences predominate in modern culture."},
{word:"Presume",pos:"verb",correct:"Suppose something to be true without proof",options:["Know something with complete certainty","Run very fast","Sleep deeply"],level:"moderate",example:"I presume you have read the report."},
{word:"Prevail",pos:"verb",correct:"Prove more powerful; be widespread",options:["Fail and be overcome by others","Run very fast","Sleep deeply"],level:"moderate",example:"Justice will eventually prevail."},
{word:"Proclaim",pos:"verb",correct:"Announce officially or publicly",options:["Keep something quiet and secret","Run very fast","Sleep deeply"],level:"moderate",example:"The king proclaimed a public holiday."},
{word:"Prohibit",pos:"verb",correct:"Formally forbid something by law or authority",options:["Officially encourage or allow something","Run very fast","Sleep deeply"],level:"moderate",example:"Signs prohibit smoking in the building."},
{word:"Prolong",pos:"verb",correct:"Extend the duration of something",options:["Shorten and bring to a quick end","Run very fast","Sleep deeply"],level:"moderate",example:"Treatment prolonged her life by years."},
{word:"Propagate",pos:"verb",correct:"Spread and promote widely; cause to multiply",options:["Suppress and prevent spreading","Run very fast","Sleep deeply"],level:"moderate",example:"Social media propagates information fast."},
{word:"Rectify",pos:"verb",correct:"Put right a mistake or fault",options:["Make a mistake even worse","Run very fast","Sleep deeply"],level:"moderate",example:"Steps were taken to rectify the error."},
{word:"Refute",pos:"verb",correct:"Prove a statement or theory to be wrong",options:["Prove a statement to be correct","Run very fast","Sleep deeply"],level:"moderate",example:"She refuted his argument with evidence."},
{word:"Reinforce",pos:"verb",correct:"Strengthen or support; make more forceful",options:["Weaken and undermine something","Run very fast","Sleep deeply"],level:"moderate",example:"Exercise reinforces good mental health."},
{word:"Relinquish",pos:"verb",correct:"Voluntarily give up control of something",options:["Hold on firmly and refuse to give up","Run very fast","Sleep deeply"],level:"moderate",example:"He relinquished his position as CEO."},
{word:"Replenish",pos:"verb",correct:"Fill up again; restore to a former level",options:["Deplete and empty completely","Run very fast","Sleep deeply"],level:"moderate",example:"Replenish your energy with good food."},
{word:"Repudiate",pos:"verb",correct:"Refuse to accept or be associated with",options:["Wholeheartedly accept and endorse","Run very fast","Sleep deeply"],level:"moderate",example:"He repudiated his earlier statements."},
{word:"Resonate",pos:"verb",correct:"Evoke a feeling of shared emotion or meaning",options:["Fail to affect or connect with anyone","Run very fast","Sleep deeply"],level:"moderate",example:"Her story resonated with the audience."},
{word:"Retaliate",pos:"verb",correct:"Make an attack in return for one received",options:["Accept an attack without any response","Run very fast","Sleep deeply"],level:"moderate",example:"They threatened to retaliate if attacked."},
{word:"Revere",pos:"verb",correct:"Feel deep respect or admiration for",options:["Feel deep contempt for someone","Run very fast","Sleep deeply"],level:"moderate",example:"Many revere the ancient teacher."},
{word:"Sanction",pos:"verb",correct:"Give official approval or permission; impose a penalty",options:["Withhold permission; lift all penalties","Run very fast","Sleep deeply"],level:"moderate",example:"The board sanctioned the new policy."},
{word:"Stagnate",pos:"verb",correct:"Stop developing; become stale through inactivity",options:["Grow and develop rapidly","Run very fast","Sleep deeply"],level:"moderate",example:"The economy stagnated during the crisis."},
{word:"Stimulate",pos:"verb",correct:"Raise levels of activity or interest; excite",options:["Dull and suppress activity","Run very fast","Sleep deeply"],level:"moderate",example:"Reading stimulates the imagination."},
{word:"Subdue",pos:"verb",correct:"Overcome or bring under control; make less intense",options:["Intensify and make more powerful","Run very fast","Sleep deeply"],level:"moderate",example:"Police subdued the violent suspect."},
{word:"Succumb",pos:"verb",correct:"Fail to resist pressure; yield; die from disease",options:["Successfully resist and overcome","Run very fast","Sleep deeply"],level:"moderate",example:"She succumbed to the illness."},
{word:"Suppress",pos:"verb",correct:"Forcibly put an end to; prevent from being expressed",options:["Encourage and allow expression","Run very fast","Sleep deeply"],level:"moderate",example:"He tried to suppress his feelings."},
{word:"Sustain",pos:"verb",correct:"Strengthen or support; keep going over time",options:["Weaken and allow to fail","Run very fast","Sleep deeply"],level:"moderate",example:"A good diet sustains good health."},
{word:"Thwart",pos:"verb",correct:"Prevent someone from accomplishing something",options:["Help someone accomplish a goal","Run very fast","Sleep deeply"],level:"moderate",example:"Bad weather thwarted their plans."},
{word:"Transgress",pos:"verb",correct:"Go beyond the limits set by a law or code",options:["Stay firmly within all boundaries","Run very fast","Sleep deeply"],level:"moderate",example:"She transgressed company policy."},
{word:"Undermine",pos:"verb",correct:"Lessen the effectiveness of something gradually",options:["Strengthen and support something","Run very fast","Sleep deeply"],level:"moderate",example:"Constant criticism undermines confidence."},
{word:"Validate",pos:"verb",correct:"Check or prove the validity or accuracy of something",options:["Disprove and invalidate something","Run very fast","Sleep deeply"],level:"moderate",example:"The test validates her skills."},
{word:"Agenda",pos:"noun",correct:"A list of items to be discussed at a meeting",options:["A random collection of unrelated notes","Something very loud","Something very fast"],level:"common",example:"The meeting agenda was sent in advance."},
{word:"Alliance",pos:"noun",correct:"A union formed for mutual benefit or a common cause",options:["An ongoing conflict between groups","Something very loud","Something very fast"],level:"common",example:"The two countries formed a strong alliance."},
{word:"Alternative",pos:"noun",correct:"A choice available when others are not possible",options:["Having no other choice at all","Something very loud","Something very fast"],level:"common",example:"Is there an alternative to surgery?"},
{word:"Ambition",pos:"noun",correct:"A strong desire to achieve something important",options:["A complete lack of drive or goals","Something very loud","Something very fast"],level:"common",example:"Her ambition led her to the top."},
{word:"Anecdote",pos:"noun",correct:"A short, entertaining story about a real event",options:["A long fictional novel","Something very loud","Something very fast"],level:"common",example:"He shared a funny anecdote about his travels."},
{word:"Anxiety",pos:"noun",correct:"A feeling of worry or unease, often about the future",options:["A feeling of total peace and calm","Something very loud","Something very fast"],level:"common",example:"She experienced anxiety before the exam."},
{word:"Apprentice",pos:"noun",correct:"A person learning a trade from a skilled employer",options:["An experienced master of a craft","Something very loud","Something very fast"],level:"common",example:"He worked as an apprentice to the carpenter."},
{word:"Archive",pos:"noun",correct:"A collection of historical documents or records",options:["A place where future plans are stored","Something very loud","Something very fast"],level:"common",example:"The library has a vast digital archive."},
{word:"Aspiration",pos:"noun",correct:"A hope or ambition of achieving something",options:["A complete lack of hope or desire","Something very loud","Something very fast"],level:"common",example:"Her aspiration is to study abroad."},
{word:"Asset",pos:"noun",correct:"A useful or valuable thing, person, or quality",options:["A liability or disadvantage","Something very loud","Something very fast"],level:"common",example:"Her language skills are a valuable asset."},
{word:"Assumption",pos:"noun",correct:"A thing accepted as true without proof",options:["A fact proven beyond all doubt","Something very loud","Something very fast"],level:"common",example:"Don't make assumptions about others."},
{word:"Attitude",pos:"noun",correct:"A settled way of thinking or feeling about something",options:["Having no thoughts or feelings","Something very loud","Something very fast"],level:"common",example:"A positive attitude makes a difference."},
{word:"Authority",pos:"noun",correct:"The power to give orders and make decisions",options:["Having no power over anything","Something very loud","Something very fast"],level:"common",example:"The teacher has authority in the classroom."},
{word:"Barrier",pos:"noun",correct:"A fence or obstacle that prevents movement or access",options:["A pathway that allows free movement","Something very loud","Something very fast"],level:"common",example:"Language can be a barrier to communication."},
{word:"Bias",pos:"noun",correct:"Unfair preference for one thing over another",options:["A completely fair and balanced view","Something very loud","Something very fast"],level:"common",example:"The jury must be free from bias."},
{word:"Blueprint",pos:"noun",correct:"A technical plan or drawing; a model for something",options:["A random collection of unplanned ideas","Something very loud","Something very fast"],level:"common",example:"The architect showed the blueprint."},
{word:"Breakthrough",pos:"noun",correct:"A sudden, important discovery or development",options:["A complete failure or setback","Something very loud","Something very fast"],level:"common",example:"Scientists made a medical breakthrough."},
{word:"Budget",pos:"noun",correct:"An estimate of income and expenditure for a period",options:["Spending without any limit or plan","Something very loud","Something very fast"],level:"common",example:"Stay within your monthly budget."},
{word:"Campaign",pos:"noun",correct:"An organized course of action to achieve a goal",options:["A single unplanned action","Something very loud","Something very fast"],level:"common",example:"The election campaign lasted six months."},
{word:"Candidate",pos:"noun",correct:"A person applying for a job or put forward for election",options:["Someone who is not being considered","Something very loud","Something very fast"],level:"common",example:"Three candidates applied for the position."},
{word:"Capability",pos:"noun",correct:"The power or ability to do something",options:["A complete inability to do anything","Something very loud","Something very fast"],level:"common",example:"The software has new capabilities."},
{word:"Catalyst",pos:"noun",correct:"A person or thing that causes change; a substance speeding reactions",options:["Something that prevents all change","Something very loud","Something very fast"],level:"common",example:"The speech was a catalyst for reform."},
{word:"Clarity",pos:"noun",correct:"The quality of being clear and easy to understand",options:["Confusion and utter lack of clarity","Something very loud","Something very fast"],level:"common",example:"Write with clarity and precision."},
{word:"Colleague",pos:"noun",correct:"A person with whom one works in a profession",options:["A rival or enemy in business","Something very loud","Something very fast"],level:"common",example:"She asked her colleague for advice."},
{word:"Commitment",pos:"noun",correct:"The state of being dedicated to a cause or activity",options:["A total lack of dedication","Something very loud","Something very fast"],level:"common",example:"Success requires full commitment."},
{word:"Community",pos:"noun",correct:"A group of people living in the same place or sharing something",options:["A single isolated individual","Something very loud","Something very fast"],level:"common",example:"The community came together to help."},
{word:"Competence",pos:"noun",correct:"The ability to do something successfully and efficiently",options:["A lack of skill and ability","Something very loud","Something very fast"],level:"common",example:"She demonstrated great competence."},
{word:"Competition",pos:"noun",correct:"The activity of competing against others for a prize",options:["Cooperation with no opposition","Something very loud","Something very fast"],level:"common",example:"There is strong competition for the job."},
{word:"Compliance",pos:"noun",correct:"Acting in accordance with a wish, demand, or rule",options:["Refusal to follow any rules","Something very loud","Something very fast"],level:"common",example:"Compliance with safety rules is mandatory."},
{word:"Conflict",pos:"noun",correct:"A serious disagreement or clash between groups",options:["Perfect harmony and agreement","Something very loud","Something very fast"],level:"common",example:"The conflict lasted for years."},
{word:"Constraint",pos:"noun",correct:"A limitation or restriction on something",options:["Complete freedom and no restriction","Something very loud","Something very fast"],level:"common",example:"Budget constraints limited the project."},
{word:"Contribution",pos:"noun",correct:"Something given to help achieve a result",options:["Something taken away from a cause","Something very loud","Something very fast"],level:"common",example:"Her contribution made a real difference."},
{word:"Controversy",pos:"noun",correct:"Prolonged public disagreement or heated debate",options:["Complete public agreement on a topic","Something very loud","Something very fast"],level:"common",example:"The new policy sparked controversy."},
{word:"Creativity",pos:"noun",correct:"The use of imagination to produce original ideas",options:["The absence of any imaginative thought","Something very loud","Something very fast"],level:"common",example:"Creativity drives innovation."},
{word:"Crisis",pos:"noun",correct:"A time of intense difficulty or danger",options:["A period of peace and stability","Something very loud","Something very fast"],level:"common",example:"The company faced a financial crisis."},
{word:"Critique",pos:"noun",correct:"A detailed analysis and assessment of something",options:["A vague and unspecific comment","Something very loud","Something very fast"],level:"common",example:"The professor offered a detailed critique."},
{word:"Deadline",pos:"noun",correct:"The latest time or date by which something must be done",options:["A time when something can be extended","Something very loud","Something very fast"],level:"common",example:"Submit the report before the deadline."},
{word:"Debate",pos:"noun",correct:"A formal discussion on a particular topic",options:["An informal agreement with no discussion","Something very loud","Something very fast"],level:"common",example:"The debate lasted over two hours."},
{word:"Dedication",pos:"noun",correct:"The quality of being committed to a task or purpose",options:["A total lack of commitment","Something very loud","Something very fast"],level:"common",example:"Her dedication inspired the whole team."},
{word:"Deficiency",pos:"noun",correct:"A lack or shortage of something essential",options:["An abundance of everything needed","Something very loud","Something very fast"],level:"common",example:"A vitamin deficiency caused her fatigue."},
{word:"Diagnosis",pos:"noun",correct:"The identification of an illness through examination",options:["A treatment given without examination","Something very loud","Something very fast"],level:"common",example:"The diagnosis revealed a minor infection."},
{word:"Dilemma",pos:"noun",correct:"A situation in which a difficult choice must be made",options:["A situation with an obvious clear answer","Something very loud","Something very fast"],level:"common",example:"She faced a difficult dilemma."},
{word:"Discipline",pos:"noun",correct:"Training to develop self-control; a branch of study",options:["Complete lack of self-control","Something very loud","Something very fast"],level:"common",example:"Discipline is essential to success."},
{word:"Discourse",pos:"noun",correct:"Written or spoken communication or discussion",options:["Silence with no communication","Something very loud","Something very fast"],level:"common",example:"Public discourse shapes public opinion."},
{word:"Disruption",pos:"noun",correct:"Disturbance that interrupts the usual course of things",options:["Something that maintains the usual order","Something very loud","Something very fast"],level:"common",example:"The storm caused major travel disruption."},
{word:"Documentary",pos:"noun",correct:"A film or program that presents real events",options:["A fictional story with invented events","Something very loud","Something very fast"],level:"common",example:"They watched a documentary on climate change."},
{word:"Domain",pos:"noun",correct:"An area of territory, knowledge, or activity",options:["Something with no defined area","Something very loud","Something very fast"],level:"common",example:"Medicine is not my domain."},
{word:"Drought",pos:"noun",correct:"A prolonged period of abnormally low rainfall",options:["A period of excessive flooding","Something very loud","Something very fast"],level:"common",example:"The drought destroyed the crops."},
{word:"Duration",pos:"noun",correct:"The length of time something lasts or takes",options:["The starting point of an event","Something very loud","Something very fast"],level:"common",example:"The flight has a duration of twelve hours."},
{word:"Ecosystem",pos:"noun",correct:"A biological community of organisms and their environment",options:["A place with no living organisms","Something very loud","Something very fast"],level:"common",example:"Forests support a rich ecosystem."},
{word:"Efficiency",pos:"noun",correct:"Achieving maximum productivity with minimum wasted effort",options:["Wasting maximum effort for little result","Something very loud","Something very fast"],level:"common",example:"Efficiency is key in business."},
{word:"Elimination",pos:"noun",correct:"The process of removing or getting rid of something",options:["The process of adding more of something","Something very loud","Something very fast"],level:"common",example:"The elimination of poverty is a global goal."},
{word:"Engagement",pos:"noun",correct:"The act of being involved in something; commitment",options:["Complete disconnection and disinterest","Something very loud","Something very fast"],level:"common",example:"Student engagement improves learning."},
{word:"Enterprise",pos:"noun",correct:"A project or business undertaking, especially a bold one",options:["A passive and inactive situation","Something very loud","Something very fast"],level:"common",example:"She started a new enterprise."},
{word:"Epidemic",pos:"noun",correct:"A widespread occurrence of an infectious disease",options:["An isolated single case of illness","Something very loud","Something very fast"],level:"common",example:"The flu epidemic spread quickly."},
{word:"Equality",pos:"noun",correct:"The state of being equal in rights, status, and opportunities",options:["The state of inequality and unfairness","Something very loud","Something very fast"],level:"common",example:"Gender equality is a human right."},
{word:"Escalation",pos:"noun",correct:"A rapid increase; intensification of a conflict",options:["A gradual de-escalation and calm","Something very loud","Something very fast"],level:"common",example:"The escalation of tensions worried leaders."},
{word:"Estimation",pos:"noun",correct:"An approximate calculation of value or number",options:["An exact and perfectly precise figure","Something very loud","Something very fast"],level:"common",example:"My estimation was close to the real cost."},
{word:"Ethics",pos:"noun",correct:"Moral principles governing behavior or a discipline",options:["A disregard for all moral principles","Something very loud","Something very fast"],level:"common",example:"Medical ethics guide doctors' decisions."},
{word:"Evaluation",pos:"noun",correct:"A formal assessment of something",options:["An informal and vague impression","Something very loud","Something very fast"],level:"common",example:"The evaluation revealed areas for improvement."},
{word:"Evolution",pos:"noun",correct:"Gradual development, especially of living organisms over time",options:["Sudden creation without any development","Something very loud","Something very fast"],level:"common",example:"Evolution explains diversity of life."},
{word:"Exploitation",pos:"noun",correct:"The action of treating someone unfairly for profit",options:["The action of treating someone fairly and well","Something very loud","Something very fast"],level:"common",example:"Workers protested against exploitation."},
{word:"Exposure",pos:"noun",correct:"The state of being vulnerable to something; publicity",options:["The state of being completely protected","Something very loud","Something very fast"],level:"common",example:"Exposure to sunlight produces vitamin D."},
{word:"Extinction",pos:"noun",correct:"The state of being no longer in existence",options:["The process of thriving and multiplying","Something very loud","Something very fast"],level:"common",example:"Many species face extinction."},
{word:"Forecast",pos:"noun",correct:"A prediction of future events, especially weather",options:["A report of past events already known","Something very loud","Something very fast"],level:"common",example:"The weather forecast predicts rain."},
{word:"Frustration",pos:"noun",correct:"The feeling of being upset or annoyed by being unable to achieve",options:["The feeling of great achievement","Something very loud","Something very fast"],level:"common",example:"She felt frustration at the slow progress."},
{word:"Generation",pos:"noun",correct:"All the people born and living at about the same time",options:["A single individual with no peers","Something very loud","Something very fast"],level:"common",example:"Each generation faces new challenges."},
{word:"Globalization",pos:"noun",correct:"The process of international integration of economies and cultures",options:["The isolation of countries from each other","Something very loud","Something very fast"],level:"common",example:"Globalization connects world markets."},
{word:"Governance",pos:"noun",correct:"The way in which an organization is controlled",options:["An organization with no control","Something very loud","Something very fast"],level:"common",example:"Good governance builds public trust."},
{word:"Hypothesis",pos:"noun",correct:"A proposed explanation made on limited evidence",options:["A proven and established fact","Something very loud","Something very fast"],level:"common",example:"Test your hypothesis with an experiment."},
{word:"Implication",pos:"noun",correct:"A likely consequence or conclusion",options:["Something with no consequence at all","Something very loud","Something very fast"],level:"common",example:"Consider the implications of your choice."},
{word:"Incentive",pos:"noun",correct:"A thing that motivates or encourages someone to do something",options:["Something that discourages action","Something very loud","Something very fast"],level:"common",example:"Bonuses are an incentive to work harder."},
{word:"Indicator",pos:"noun",correct:"A thing that shows the state or level of something",options:["Something that hides information","Something very loud","Something very fast"],level:"common",example:"GDP is an indicator of economic health."},
{word:"Inequality",pos:"noun",correct:"Difference in opportunity, wealth, or status among people",options:["Perfect equality between all people","Something very loud","Something very fast"],level:"common",example:"Income inequality is a growing concern."},
{word:"Infrastructure",pos:"noun",correct:"The basic physical systems of a country, region, or organization",options:["The superficial exterior of a system","Something very loud","Something very fast"],level:"common",example:"Good roads and schools are infrastructure."},
{word:"Insight",pos:"noun",correct:"An accurate and deep understanding of something",options:["A shallow and inaccurate understanding","Something very loud","Something very fast"],level:"common",example:"She offered valuable insights."},
{word:"Institution",pos:"noun",correct:"An established organization or custom in society",options:["A temporary and informal gathering","Something very loud","Something very fast"],level:"common",example:"Universities are important institutions."},
{word:"Interaction",pos:"noun",correct:"Reciprocal action or influence between people or things",options:["Complete isolation without any contact","Something very loud","Something very fast"],level:"common",example:"Teacher-student interaction improves learning."},
{word:"Investment",pos:"noun",correct:"Putting money into something for profit or benefit",options:["Losing money without any return","Something very loud","Something very fast"],level:"common",example:"Education is an investment in the future."},
{word:"Legacy",pos:"noun",correct:"Something passed down from a predecessor; lasting impact",options:["Something with no lasting effect","Something very loud","Something very fast"],level:"common",example:"He left a legacy of kindness."},
{word:"Legislation",pos:"noun",correct:"Laws, considered collectively; the process of making laws",options:["The absence of all legal structure","Something very loud","Something very fast"],level:"common",example:"New legislation protects workers' rights."},
{word:"Leverage",pos:"noun",correct:"Power or ability to influence people or situations",options:["Complete powerlessness and inability","Something very loud","Something very fast"],level:"common",example:"Use your skills as leverage."},
{word:"Literacy",pos:"noun",correct:"The ability to read and write; knowledge in an area",options:["The inability to read or write","Something very loud","Something very fast"],level:"common",example:"Digital literacy is essential today."},
{word:"Mandate",pos:"noun",correct:"An official order or authority to do something",options:["A suggestion that can be ignored","Something very loud","Something very fast"],level:"common",example:"The government has a mandate to act."},
{word:"Mechanism",pos:"noun",correct:"A process by which something takes place; a system of parts",options:["A random series of unconnected events","Something very loud","Something very fast"],level:"common",example:"Feedback is a learning mechanism."},
{word:"Mentorship",pos:"noun",correct:"Guidance and support from an experienced person",options:["Working without guidance or support","Something very loud","Something very fast"],level:"common",example:"Mentorship accelerates professional growth."},
{word:"Migration",pos:"noun",correct:"Movement from one place to another; seasonal movement of animals",options:["Staying permanently in one location","Something very loud","Something very fast"],level:"common",example:"Migration helps people find better opportunities."},
{word:"Misconception",pos:"noun",correct:"A false or incorrect view or understanding of something",options:["A completely accurate understanding","Something very loud","Something very fast"],level:"common",example:"There are many misconceptions about nutrition."},
{word:"Narrative",pos:"noun",correct:"A spoken or written account of connected events",options:["A random collection of unconnected facts","Something very loud","Something very fast"],level:"common",example:"The narrative was gripping from start to finish."},
{word:"Obligation",pos:"noun",correct:"An act or course of action required by morality or law",options:["Something entirely optional and voluntary","Something very loud","Something very fast"],level:"common",example:"Paying taxes is a legal obligation."},
{word:"Obstacle",pos:"noun",correct:"A thing that blocks one's way or prevents progress",options:["A clear path with no resistance","Something very loud","Something very fast"],level:"common",example:"Every obstacle is a chance to grow."},
{word:"Outcome",pos:"noun",correct:"The way a thing turns out; a consequence or result",options:["The starting point or initial cause","Something very loud","Something very fast"],level:"common",example:"The outcome exceeded expectations."},
{word:"Oversight",pos:"noun",correct:"Supervision; failure to notice something",options:["Paying detailed attention to everything","Something very loud","Something very fast"],level:"common",example:"An oversight caused a costly error."},
{word:"Paradigm",pos:"noun",correct:"A typical example or model; a framework of thought",options:["A random example with no pattern","Something very loud","Something very fast"],level:"common",example:"The internet created a new paradigm."},
{word:"Partnership",pos:"noun",correct:"Association between two or more people working together",options:["A solo effort with no collaboration","Something very loud","Something very fast"],level:"common",example:"The partnership produced great results."},
{word:"Phenomenon",pos:"noun",correct:"A fact or situation that is observed but not fully understood",options:["A common event that needs no explanation","Something very loud","Something very fast"],level:"common",example:"The northern lights are a natural phenomenon."},
{word:"Platform",pos:"noun",correct:"A raised surface; a plan of action; a base for operations",options:["A sunken, unusable surface","Something very loud","Something very fast"],level:"common",example:"Social media is a global platform."},
{word:"Portfolio",pos:"noun",correct:"A range of investments; a collection of work samples",options:["A single example of work","Something very loud","Something very fast"],level:"common",example:"Her portfolio impressed the gallery."},
{word:"Precedent",pos:"noun",correct:"An earlier event used as an example for the future",options:["An event with no bearing on the future","Something very loud","Something very fast"],level:"common",example:"The ruling set a legal precedent."},
{word:"Prediction",pos:"noun",correct:"A statement that something will happen in the future",options:["A record of past events already done","Something very loud","Something very fast"],level:"common",example:"The prediction turned out to be accurate."},
{word:"Premise",pos:"noun",correct:"A previous statement from which a conclusion is drawn",options:["A conclusion with no supporting reason","Something very loud","Something very fast"],level:"common",example:"The argument was built on a false premise."},
{word:"Privilege",pos:"noun",correct:"A special right or advantage available only to certain people",options:["A burden or disadvantage imposed on all","Something very loud","Something very fast"],level:"common",example:"Education is a privilege not all have."},
{word:"Proficiency",pos:"noun",correct:"A high degree of skill or competence",options:["A very low level of skill and ability","Something very loud","Something very fast"],level:"common",example:"Proficiency in English opens doors."},
{word:"Proposal",pos:"noun",correct:"A plan or suggestion put forward for consideration",options:["A final and settled decision","Something very loud","Something very fast"],level:"common",example:"She submitted a project proposal."},
{word:"Prototype",pos:"noun",correct:"A first model from which others are copied; early version",options:["The final and perfected version","Something very loud","Something very fast"],level:"common",example:"They tested the prototype before production."},
{word:"Rationale",pos:"noun",correct:"A set of reasons for a course of action",options:["A decision made with no reasoning","Something very loud","Something very fast"],level:"common",example:"Explain the rationale behind the decision."},
{word:"Recession",pos:"noun",correct:"A period of temporary economic decline",options:["A period of strong economic growth","Something very loud","Something very fast"],level:"common",example:"The recession caused job losses."},
{word:"Reform",pos:"noun",correct:"Making changes to improve something",options:["Keeping something exactly as it is","Something very loud","Something very fast"],level:"common",example:"Education reform is necessary."},
{word:"Regulation",pos:"noun",correct:"A rule made by an authority to control behavior",options:["Complete freedom with no rules","Something very loud","Something very fast"],level:"common",example:"Financial regulations protect consumers."},
{word:"Revenue",pos:"noun",correct:"Income generated by a business or government",options:["Money spent or paid out","Something very loud","Something very fast"],level:"common",example:"Advertising increased the company's revenue."},
{word:"Revolution",pos:"noun",correct:"A forcible overthrow of a system; a dramatic change",options:["A slow and gradual maintenance of the status quo","Something very loud","Something very fast"],level:"common",example:"The industrial revolution changed society."},
{word:"Rhetoric",pos:"noun",correct:"Persuasive language used in public speaking or writing",options:["Silent communication with no words","Something very loud","Something very fast"],level:"common",example:"Political rhetoric can mislead voters."},
{word:"Risk",pos:"noun",correct:"The possibility of something bad happening",options:["The guarantee of a good outcome","Something very loud","Something very fast"],level:"common",example:"Every investment carries some risk."},
{word:"Scope",pos:"noun",correct:"The extent of the area or subject matter covered",options:["Something with no defined boundaries","Something very loud","Something very fast"],level:"common",example:"Define the scope of the project first."},
{word:"Sector",pos:"noun",correct:"A distinct part of an economy, society, or industry",options:["A single undivided whole","Something very loud","Something very fast"],level:"common",example:"The tech sector is growing rapidly."},
{word:"Sequence",pos:"noun",correct:"A particular order in which related things follow each other",options:["A random and disordered arrangement","Something very loud","Something very fast"],level:"common",example:"Follow the correct sequence of steps."},
{word:"Spectrum",pos:"noun",correct:"A wide range of values, qualities, or ideas",options:["A single fixed point with no range","Something very loud","Something very fast"],level:"common",example:"Autism exists on a spectrum."},
{word:"Stimulus",pos:"noun",correct:"Something that causes activity or response",options:["Something that causes inactivity","Something very loud","Something very fast"],level:"common",example:"Music is a stimulus for creativity."},
{word:"Syndrome",pos:"noun",correct:"A group of symptoms that consistently occur together",options:["A single isolated symptom","Something very loud","Something very fast"],level:"common",example:"Burnout is a recognized syndrome."},
{word:"Tactic",pos:"noun",correct:"An action carefully planned to achieve a specific end",options:["A random action with no planning","Something very loud","Something very fast"],level:"common",example:"Change your tactic if it isn't working."},
{word:"Threshold",pos:"noun",correct:"The level or point at which something begins",options:["The point at which something ends","Something very loud","Something very fast"],level:"common",example:"Set a threshold for acceptable risk."},
{word:"Transition",pos:"noun",correct:"The process of changing from one state to another",options:["Remaining permanently in the same state","Something very loud","Something very fast"],level:"common",example:"The transition to remote work was smooth."},
{word:"Turnaround",pos:"noun",correct:"An improvement after a period of difficulty",options:["A continued decline after improvement","Something very loud","Something very fast"],level:"common",example:"The company made an impressive turnaround."},
{word:"Urgency",pos:"noun",correct:"Importance requiring swift action",options:["Something not requiring any speed","Something very loud","Something very fast"],level:"common",example:"She sensed the urgency in his voice."},
{word:"Variable",pos:"noun",correct:"An element that can change or differ; a symbol in maths",options:["A fixed and unchanging constant","Something very loud","Something very fast"],level:"common",example:"Temperature is one variable in the experiment."},
{word:"Welfare",pos:"noun",correct:"The health, happiness, and fortunes of a person or group",options:["The harm and unhappiness of a group","Something very loud","Something very fast"],level:"common",example:"Child welfare is a top priority."},
{word:"Accommodate",pos:"verb",correct:"Provide space or lodging for; adapt to fit",options:["Refuse space and turn away","Run very fast","Sleep deeply"],level:"common",example:"The hall can accommodate 500 people."},
{word:"Accumulate",pos:"verb",correct:"Gather together a number of things over time",options:["Scatter and give away over time","Run very fast","Sleep deeply"],level:"common",example:"Debts can accumulate quickly."},
{word:"Affiliate",pos:"verb",correct:"Connect officially with an organization",options:["Separate from and leave an organization","Run very fast","Sleep deeply"],level:"common",example:"The school is affiliated with the university."},
{word:"Align",pos:"verb",correct:"Place or arrange in a straight line; bring into agreement",options:["Place at random angles","Run very fast","Sleep deeply"],level:"common",example:"Align your goals with your values."},
{word:"Boost",pos:"verb",correct:"Help or encourage something to increase",options:["Reduce and suppress something","Run very fast","Sleep deeply"],level:"common",example:"Exercise boosts your energy."},
{word:"Categorize",pos:"verb",correct:"Place in a particular class or group",options:["Leave things with no classification","Run very fast","Sleep deeply"],level:"common",example:"Categorize the data by region."},
{word:"Clarify",pos:"verb",correct:"Make a statement or situation less confused",options:["Make something more confused","Run very fast","Sleep deeply"],level:"common",example:"Please clarify what you mean."},
{word:"Classify",pos:"verb",correct:"Arrange in classes or categories",options:["Leave in complete disorder","Run very fast","Sleep deeply"],level:"common",example:"Classify the animals by species."},
{word:"Compile",pos:"verb",correct:"Gather information and put it together",options:["Scatter information to many places","Run very fast","Sleep deeply"],level:"common",example:"She compiled data from multiple sources."},
{word:"Compromise",pos:"verb",correct:"Settle a dispute by mutual concession",options:["Refuse all concessions and compromise","Run very fast","Sleep deeply"],level:"common",example:"They had to compromise on the price."},
{word:"Concentrate",pos:"verb",correct:"Focus one's attention on; make a substance stronger",options:["Scatter attention widely","Run very fast","Sleep deeply"],level:"common",example:"Concentrate on your breathing."},
{word:"Configure",pos:"verb",correct:"Arrange in a specific way for operation",options:["Leave in a disorganized state","Run very fast","Sleep deeply"],level:"common",example:"Configure the settings before use."},
{word:"Conquer",pos:"verb",correct:"Overcome and take control of by force",options:["Surrender and yield to a force","Run very fast","Sleep deeply"],level:"common",example:"She conquered her fear of heights."},
{word:"Consolidate",pos:"verb",correct:"Make stronger; combine into a single unit",options:["Split into many separate parts","Run very fast","Sleep deeply"],level:"common",example:"Consolidate your notes before the exam."},
{word:"Consume",pos:"verb",correct:"Use up a resource; eat or drink",options:["Produce and create a resource","Run very fast","Sleep deeply"],level:"common",example:"We consume too much plastic."},
{word:"Customize",pos:"verb",correct:"Modify something to suit a particular individual",options:["Use something in its generic form","Run very fast","Sleep deeply"],level:"common",example:"You can customize your profile settings."},
{word:"Dedicate",pos:"verb",correct:"Devote time or effort to a cause or person",options:["Withdraw all effort from a cause","Run very fast","Sleep deeply"],level:"common",example:"She dedicated years to the project."},
{word:"Deploy",pos:"verb",correct:"Bring into effective action; move to a position",options:["Withdraw from action completely","Run very fast","Sleep deeply"],level:"common",example:"Deploy the team to the new location."},
{word:"Diagnose",pos:"verb",correct:"Identify the nature of an illness or problem",options:["Ignore symptoms and offer no finding","Run very fast","Sleep deeply"],level:"common",example:"The doctor diagnosed a vitamin deficiency."},
{word:"Document",pos:"verb",correct:"Record in writing or some other permanent form",options:["Erase and destroy all records","Run very fast","Sleep deeply"],level:"common",example:"Document every step of the process."},
{word:"Empower",pos:"verb",correct:"Give authority or strength to someone; make confident",options:["Take authority and confidence away","Run very fast","Sleep deeply"],level:"common",example:"Education empowers young people."},
{word:"Engage",pos:"verb",correct:"Participate or become involved in something",options:["Withdraw and refuse to participate","Run very fast","Sleep deeply"],level:"common",example:"Engage with the community regularly."},
{word:"Gauge",pos:"verb",correct:"Estimate or determine the amount of something",options:["Ignore the amount of something","Run very fast","Sleep deeply"],level:"common",example:"Gauge the audience's reaction before continuing."},
{word:"Govern",pos:"verb",correct:"Conduct the policy and affairs of a place",options:["Ignore and take no control of affairs","Run very fast","Sleep deeply"],level:"common",example:"Leaders must govern with fairness."},
{word:"Guarantee",pos:"verb",correct:"Provide a formal promise or assurance",options:["Provide no promise or assurance","Run very fast","Sleep deeply"],level:"common",example:"I can guarantee the quality."},
{word:"Illustrate",pos:"verb",correct:"Explain or make clear by using examples or pictures",options:["Make something more confusing","Run very fast","Sleep deeply"],level:"common",example:"Let me illustrate with an example."},
{word:"Initiate",pos:"verb",correct:"Cause a process to begin; admit someone to a group",options:["End and close a process","Run very fast","Sleep deeply"],level:"common",example:"She initiated the conversation."},
{word:"Innovate",pos:"verb",correct:"Introduce new methods, ideas, or products",options:["Stick to outdated methods only","Run very fast","Sleep deeply"],level:"common",example:"Companies must innovate to survive."},
{word:"Inspect",pos:"verb",correct:"Look at something carefully to assess condition",options:["Ignore without any examination","Run very fast","Sleep deeply"],level:"common",example:"Inspect the work before submitting it."},
{word:"Interpret",pos:"verb",correct:"Explain the meaning of something; perform in a particular way",options:["Leave something unexplained","Run very fast","Sleep deeply"],level:"common",example:"How do you interpret these results?"},
{word:"Map",pos:"verb",correct:"Represent a process or concept visually; plan in detail",options:["Leave a process unplanned and unclear","Run very fast","Sleep deeply"],level:"common",example:"Map out your five-year plan."},
{word:"Maximize",pos:"verb",correct:"Make as large or great as possible",options:["Make as small or minimal as possible","Run very fast","Sleep deeply"],level:"common",example:"Maximize your study time."},
{word:"Minimize",pos:"verb",correct:"Reduce to the smallest possible amount or degree",options:["Increase to the largest possible amount","Run very fast","Sleep deeply"],level:"common",example:"Minimize distractions when studying."},
{word:"Mobilize",pos:"verb",correct:"Organize and encourage people to take action",options:["Discourage and disorganize people","Run very fast","Sleep deeply"],level:"common",example:"The campaign mobilized thousands of volunteers."},
{word:"Modify",pos:"verb",correct:"Make partial or minor changes to something",options:["Leave something completely unchanged","Run very fast","Sleep deeply"],level:"common",example:"Modify the plan based on feedback."},
{word:"Neutralize",pos:"verb",correct:"Render something ineffective by applying equal force",options:["Strengthen and amplify something","Run very fast","Sleep deeply"],level:"common",example:"The treaty neutralized the threat."},
{word:"Notify",pos:"verb",correct:"Inform someone of something formally",options:["Keep someone completely uninformed","Run very fast","Sleep deeply"],level:"common",example:"Notify HR when you change your address."},
{word:"Nurture",pos:"verb",correct:"Care for and encourage growth or development",options:["Neglect and allow to wither","Run very fast","Sleep deeply"],level:"common",example:"Nurture your talent every day."},
{word:"Oversee",pos:"verb",correct:"Supervise and be in charge of an activity",options:["Ignore and take no responsibility","Run very fast","Sleep deeply"],level:"common",example:"She oversees the entire operation."},
{word:"Perform",pos:"verb",correct:"Carry out an action; entertain an audience",options:["Fail to carry out an action","Run very fast","Sleep deeply"],level:"common",example:"Perform a full system backup."},
{word:"Personalize",pos:"verb",correct:"Design to meet someone's individual requirements",options:["Design for no specific person","Run very fast","Sleep deeply"],level:"common",example:"Personalize your workspace."},
{word:"Pivot",pos:"verb",correct:"Turn on a central point; change direction or strategy",options:["Stay firmly in one direction","Run very fast","Sleep deeply"],level:"common",example:"The startup had to pivot its business model."},
{word:"Position",pos:"verb",correct:"Put in a particular place; present in a certain way",options:["Leave in no defined place","Run very fast","Sleep deeply"],level:"common",example:"Position yourself near the front."},
{word:"Proceed",pos:"verb",correct:"Begin or continue a course of action",options:["Stop and abandon a course of action","Run very fast","Sleep deeply"],level:"common",example:"Proceed to the next step."},
{word:"Propose",pos:"verb",correct:"Put forward a plan or idea for consideration",options:["Withdraw all ideas from consideration","Run very fast","Sleep deeply"],level:"common",example:"She proposed a creative solution."},
{word:"Pursue",pos:"verb",correct:"Follow or chase with the intention to reach",options:["Give up and stop following","Run very fast","Sleep deeply"],level:"common",example:"Pursue your passion with dedication."},
{word:"Quantify",pos:"verb",correct:"Express or measure the quantity of something",options:["Leave something unmeasured","Run very fast","Sleep deeply"],level:"common",example:"Quantify the impact of the changes."},
{word:"Recruit",pos:"verb",correct:"Enlist someone to join an organization",options:["Dismiss someone from an organization","Run very fast","Sleep deeply"],level:"common",example:"They plan to recruit 50 new staff."},
{word:"Refine",pos:"verb",correct:"Remove impurities; make small improvements",options:["Make cruder and less refined","Run very fast","Sleep deeply"],level:"common",example:"Refine your pitch before the presentation."},
{word:"Reflect",pos:"verb",correct:"Think deeply about something; mirror an image",options:["Avoid all thought about something","Run very fast","Sleep deeply"],level:"common",example:"Reflect on your week every Friday."},
{word:"Regulate",pos:"verb",correct:"Control or supervise by means of rules",options:["Allow to operate with no rules","Run very fast","Sleep deeply"],level:"common",example:"The government regulates food safety."},
{word:"Revise",pos:"verb",correct:"Examine and improve a text or plan",options:["Leave unchanged and uncorrected","Run very fast","Sleep deeply"],level:"common",example:"Revise your essay before submitting."},
{word:"Scale",pos:"verb",correct:"Increase or reduce in size or extent",options:["Keep permanently at one fixed size","Run very fast","Sleep deeply"],level:"common",example:"Scale your business carefully."},
{word:"Secure",pos:"verb",correct:"Firmly fix in place; protect from threat; obtain",options:["Loosen and leave unprotected","Run very fast","Sleep deeply"],level:"common",example:"Secure funding for the project."},
{word:"Simplify",pos:"verb",correct:"Make something easier to do or understand",options:["Make something more complex","Run very fast","Sleep deeply"],level:"common",example:"Simplify the instructions."},
{word:"Specialize",pos:"verb",correct:"Concentrate on a particular skill or area",options:["Remain general with no focus","Run very fast","Sleep deeply"],level:"common",example:"She specialized in pediatric medicine."},
{word:"Standardize",pos:"verb",correct:"Make things conform to a standard",options:["Allow everything to be different","Run very fast","Sleep deeply"],level:"common",example:"Standardize the process across all teams."},
{word:"Streamline",pos:"verb",correct:"Make a system more efficient and effective",options:["Make a system more complex and slow","Run very fast","Sleep deeply"],level:"common",example:"Streamline your workflow."},
{word:"Strengthen",pos:"verb",correct:"Make or become stronger",options:["Make or become weaker","Run very fast","Sleep deeply"],level:"common",example:"Exercise strengthens your muscles."},
{word:"Trigger",pos:"verb",correct:"Cause an event or reaction to happen",options:["Prevent an event from happening","Run very fast","Sleep deeply"],level:"common",example:"Stress can trigger migraines."},
{word:"Unify",pos:"verb",correct:"Make or become united or uniform",options:["Split into many parts","Run very fast","Sleep deeply"],level:"common",example:"Music can unify diverse communities."},
{word:"Upgrade",pos:"verb",correct:"Raise to a higher standard or to a newer version",options:["Lower to a worse standard","Run very fast","Sleep deeply"],level:"common",example:"Upgrade your software regularly."},
{word:"Ambitious",pos:"adjective",correct:"Having a strong desire to succeed or achieve",options:["Having no desire for success","Very loud","Extremely fast"],level:"common",example:"She is ambitious and hardworking."},
{word:"Automated",pos:"adjective",correct:"Operated by machines with minimal human involvement",options:["Requiring complete manual operation","Very loud","Extremely fast"],level:"common",example:"The factory uses automated systems."},
{word:"Capable",pos:"adjective",correct:"Having the ability, fitness, or quality to do something",options:["Completely unable to do anything","Very loud","Extremely fast"],level:"common",example:"She is capable of great things."},
{word:"Compelling",pos:"adjective",correct:"Evoking interest, attention, or admiration powerfully",options:["Very dull and uninteresting","Extremely loud","Very fast"],level:"common",example:"She made a compelling argument."},
{word:"Competitive",pos:"adjective",correct:"Having a strong desire to win; as good as rivals",options:["Having no desire to compete","Very loud","Extremely fast"],level:"common",example:"The job market is highly competitive."},
{word:"Complementary",pos:"adjective",correct:"Combining in a way that enhances each other",options:["Combining in a way that conflicts","Very loud","Extremely fast"],level:"common",example:"Their skills are complementary."},
{word:"Concrete",pos:"adjective",correct:"Specific and definite; existing in physical reality",options:["Vague, abstract, and undefined","Very loud","Extremely fast"],level:"common",example:"Give me concrete examples."},
{word:"Continuous",pos:"adjective",correct:"Forming an unbroken or uninterrupted whole",options:["Interrupted frequently; stopping and starting","Very loud","Extremely fast"],level:"common",example:"Continuous learning drives success."},
{word:"Controversial",pos:"adjective",correct:"Giving rise to public disagreement",options:["Completely accepted by everyone","Very loud","Extremely fast"],level:"common",example:"The policy is controversial."},
{word:"Conventional",pos:"adjective",correct:"Following accepted social norms; traditional",options:["Very unconventional and unusual","Extremely loud","Very fast"],level:"common",example:"She prefers conventional methods."},
{word:"Convincing",pos:"adjective",correct:"Capable of causing one to believe something; persuasive",options:["Completely unpersuasive and unbelievable","Very loud","Extremely fast"],level:"common",example:"His explanation was convincing."},
{word:"Dedicated",pos:"adjective",correct:"Wholly committed to a task, purpose, or person",options:["Uncommitted and easily distracted","Very loud","Extremely fast"],level:"common",example:"A dedicated worker meets all deadlines."},
{word:"Demanding",pos:"adjective",correct:"Requiring much skill or effort; making many demands",options:["Very easy and requiring little effort","Extremely loud","Very fast"],level:"common",example:"Leadership is a demanding role."},
{word:"Emerging",pos:"adjective",correct:"Becoming prominent; newly arising",options:["Fading away and declining","Extremely loud","Very fast"],level:"common",example:"AI is an emerging technology."},
{word:"Encouraging",pos:"adjective",correct:"Giving hope or support; making something more likely",options:["Discouraging and making things less likely","Very loud","Extremely fast"],level:"common",example:"The results are encouraging."},
{word:"Essential",pos:"adjective",correct:"Absolutely necessary; extremely important",options:["Completely unnecessary and dispensable","Very loud","Extremely fast"],level:"common",example:"Sleep is essential for health."},
{word:"Exceptional",pos:"adjective",correct:"Unusually good; outstanding",options:["Very average and ordinary","Extremely loud","Very fast"],level:"common",example:"Her performance was exceptional."},
{word:"Expanding",pos:"adjective",correct:"Becoming larger or more extensive",options:["Shrinking and becoming smaller","Extremely loud","Very fast"],level:"common",example:"The expanding market offers opportunities."},
{word:"Explicit",pos:"adjective",correct:"Stated clearly and in detail; leaving no room for confusion",options:["Vague and unclear, leaving room for confusion","Very loud","Extremely fast"],level:"common",example:"Give explicit instructions."},
{word:"Groundbreaking",pos:"adjective",correct:"Innovative and pioneering; introducing new ideas",options:["Very ordinary and unoriginal","Extremely loud","Very fast"],level:"common",example:"It was a groundbreaking discovery."},
{word:"Holistic",pos:"adjective",correct:"Characterized by treating the whole rather than parts",options:["Focused only on isolated parts","Extremely loud","Very fast"],level:"common",example:"Take a holistic approach to wellness."},
{word:"Incremental",pos:"adjective",correct:"Increasing by small regular amounts; gradual",options:["Very sudden and dramatic","Extremely loud","Very fast"],level:"common",example:"Progress was incremental but steady."},
{word:"Informed",pos:"adjective",correct:"Having knowledge; making decisions based on evidence",options:["Uninformed and making decisions blindly","Very loud","Extremely fast"],level:"common",example:"Make informed decisions."},
{word:"Integrated",pos:"adjective",correct:"Combining several parts into a unified whole",options:["Made up of completely separate parts","Very loud","Extremely fast"],level:"common",example:"An integrated system works seamlessly."},
{word:"Intensive",pos:"adjective",correct:"Concentrated and thorough; requiring great effort",options:["Very mild and requiring little effort","Extremely loud","Very fast"],level:"common",example:"She attended an intensive language course."},
{word:"Interdependent",pos:"adjective",correct:"Mutually relying on each other",options:["Completely independent of each other","Extremely loud","Very fast"],level:"common",example:"Global economies are interdependent."},
{word:"Legitimate",pos:"adjective",correct:"Conforming to the law or to rules; valid",options:["Illegal or not conforming to rules","Very loud","Extremely fast"],level:"common",example:"Is this a legitimate business?"},
{word:"Linear",pos:"adjective",correct:"Progressing in a straight line; sequential",options:["Very circular and non-sequential","Extremely loud","Very fast"],level:"common",example:"Learning is not always a linear process."},
{word:"Long-term",pos:"adjective",correct:"Relating to a long period of time ahead",options:["Relating to a very short time only","Extremely loud","Very fast"],level:"common",example:"Plan for long-term success."},
{word:"Mutual",pos:"adjective",correct:"Experienced or done by each of two parties toward the other",options:["Experienced by only one side","Very loud","Extremely fast"],level:"common",example:"There is mutual respect between them."},
{word:"Ongoing",pos:"adjective",correct:"Continuing or being still in progress",options:["Already finished and completed","Extremely loud","Very fast"],level:"common",example:"The investigation is ongoing."},
{word:"Optimal",pos:"adjective",correct:"Best or most favorable; most desirable",options:["Very poor or most unfavorable","Extremely loud","Very fast"],level:"common",example:"Find the optimal solution."},
{word:"Organized",pos:"adjective",correct:"Arranged in a systematic way; methodical",options:["Very disorganized and chaotic","Extremely loud","Very fast"],level:"common",example:"An organized workspace boosts productivity."},
{word:"Outcome-based",pos:"adjective",correct:"Focused on achieving specific measurable results",options:["Having no focus on results","Extremely loud","Very fast"],level:"common",example:"We use outcome-based learning."},
{word:"Outstanding",pos:"adjective",correct:"Exceptionally good; remaining to be paid or done",options:["Very mediocre and ordinary","Extremely loud","Very fast"],level:"common",example:"She received an outstanding review."},
{word:"Overarching",pos:"adjective",correct:"Comprehensive; forming an overall framework",options:["Very narrow and limited in scope","Extremely loud","Very fast"],level:"common",example:"The overarching goal is sustainability."},
{word:"Participatory",pos:"adjective",correct:"Involving active participation by all members",options:["Excluding members from participation","Extremely loud","Very fast"],level:"common",example:"Use a participatory approach."},
{word:"Pervasive",pos:"adjective",correct:"Spreading widely through an area or group",options:["Limited to a very small area","Extremely loud","Very fast"],level:"common",example:"Social media is pervasive in modern life."},
{word:"Practical",pos:"adjective",correct:"Concerned with actual use; sensible and realistic",options:["Completely impractical and unrealistic","Very loud","Extremely fast"],level:"common",example:"Give practical advice."},
{word:"Preliminary",pos:"adjective",correct:"Preceding the main part; preparatory",options:["Following as the final and last part","Extremely loud","Very fast"],level:"common",example:"Preliminary results look promising."},
{word:"Productive",pos:"adjective",correct:"Achieving or producing a significant amount",options:["Producing very little of value","Extremely loud","Very fast"],level:"common",example:"A productive day boosts morale."},
{word:"Progressive",pos:"adjective",correct:"Happening gradually; favoring reform and change",options:["Opposing change; staying the same","Extremely loud","Very fast"],level:"common",example:"The company has a progressive culture."},
{word:"Realistic",pos:"adjective",correct:"Having a sensible and practical idea of what is possible",options:["Very idealistic and impractical","Extremely loud","Very fast"],level:"common",example:"Be realistic about your goals."},
{word:"Relevant",pos:"adjective",correct:"Closely connected or appropriate to the matter at hand",options:["Having no connection to the matter","Very loud","Extremely fast"],level:"common",example:"Keep your examples relevant."},
{word:"Renewable",pos:"adjective",correct:"Able to be replenished naturally; not finite",options:["Finite and unable to be replenished","Extremely loud","Very fast"],level:"common",example:"Solar is a renewable energy source."},
{word:"Repetitive",pos:"adjective",correct:"Containing or characterized by repetition",options:["Always new and never the same","Extremely loud","Very fast"],level:"common",example:"The job was repetitive and boring."},
{word:"Rigorous",pos:"adjective",correct:"Extremely thorough and careful; demanding",options:["Very careless and lacking thoroughness","Extremely loud","Very fast"],level:"common",example:"Research requires rigorous methodology."},
{word:"Robust",pos:"adjective",correct:"Strong and healthy; sturdy; able to withstand difficulty",options:["Very weak and fragile","Extremely loud","Very fast"],level:"common",example:"Build a robust business model."},
{word:"Seamless",pos:"adjective",correct:"Smooth and without difficulties or interruptions",options:["Very rough and full of interruptions","Extremely loud","Very fast"],level:"common",example:"The transition was seamless."},
{word:"Straightforward",pos:"adjective",correct:"Uncomplicated; easy to do or understand; honest",options:["Very complex and difficult to understand","Extremely loud","Very fast"],level:"common",example:"The process is straightforward."},
{word:"Systematic",pos:"adjective",correct:"Done according to a fixed plan or system; methodical",options:["Done randomly with no plan","Extremely loud","Very fast"],level:"common",example:"Use a systematic approach to research."},
{word:"Tangible",pos:"adjective",correct:"Perceptible by touch; clear and definite",options:["Impossible to perceive or define","Extremely loud","Very fast"],level:"common",example:"We need tangible results."},
{word:"Targeted",pos:"adjective",correct:"Directed toward a specific goal or group",options:["Directed at everything randomly","Extremely loud","Very fast"],level:"common",example:"The targeted campaign reached students."},
{word:"Timely",pos:"adjective",correct:"Done or occurring at a favorable time",options:["Done too late to be of use","Extremely loud","Very fast"],level:"common",example:"Timely feedback is most valuable."},
{word:"Unprecedented",pos:"adjective",correct:"Never done or known before",options:["Very common and frequently done","Extremely loud","Very fast"],level:"common",example:"The pandemic was an unprecedented event."},
{word:"User-friendly",pos:"adjective",correct:"Easy to use, especially for inexperienced people",options:["Very difficult and confusing to use","Extremely loud","Very fast"],level:"common",example:"The app has a user-friendly interface."},
{word:"Viable",pos:"adjective",correct:"Capable of working successfully; feasible",options:["Completely unworkable and impractical","Extremely loud","Very fast"],level:"common",example:"Is this a viable solution?"},
{word:"Voluntary",pos:"adjective",correct:"Done of one's own free will; unpaid",options:["Forced and mandatory","Extremely loud","Very fast"],level:"common",example:"Participation is voluntary."},

];


// LexiQuest App Logic

// ─── Storage ──────────────────────────────────────────────────────────────────
const DB_KEY = 'lexiquest_custom_words';
const STATS_KEY = 'lexiquest_stats';
const BEST_KEY = 'lexiquest_best';

function getCustomWords() {
  try { return JSON.parse(localStorage.getItem(DB_KEY) || '[]'); } catch { return []; }
}
function saveCustomWords(arr) {
  localStorage.setItem(DB_KEY, JSON.stringify(arr));
}
function getStats() {
  try { return JSON.parse(localStorage.getItem(STATS_KEY) || '{"total":0,"correct":0,"sessions":0,"history":[]}'); } catch { return {total:0,correct:0,sessions:0,history:[]}; }
}
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }
function getBest() { return parseInt(localStorage.getItem(BEST_KEY) || '0'); }
function saveBest(n) { localStorage.setItem(BEST_KEY, String(n)); }

// ─── All Words ─────────────────────────────────────────────────────────────────
function getAllWords() {
  return [...BUILTIN_WORDS, ...getCustomWords()];
}

// ─── Quiz State ────────────────────────────────────────────────────────────────
let quiz = {
  level: 'all',
  queue: [],
  current: 0,
  score: 0,
  answered: false,
  total: 20,
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQueue(level) {
  let words = getAllWords();
  if (level !== 'all') words = words.filter(w => w.level === level);
  if (words.length === 0) words = getAllWords();
  return shuffle(words).slice(0, quiz.total);
}

function startQuiz(level) {
  quiz.level = level || quiz.level;
  quiz.queue = buildQueue(quiz.level);
  quiz.current = 0;
  quiz.score = 0;
  quiz.answered = false;
  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const section = document.getElementById('quizSection');
  if (quiz.current >= quiz.queue.length) {
    showScore();
    return;
  }
  const word = quiz.queue[quiz.current];
  const allOpts = shuffle([word.correct, ...word.options]);
  // Store correct answer on quiz state to avoid injection issues
  quiz._correct = word.correct;

  section.innerHTML = `
    <div class="question-card">
      <div class="word-label">What does this word mean?</div>
      <div class="word-display">${word.word}</div>
      <div class="word-meta">
        ${word.pos ? `<span class="word-type">${word.pos}</span>` : ''}
        <span class="word-level-badge ${word.level}">${levelLabel(word.level)}</span>
        <span style="font-size:0.78rem">${quiz.current + 1} of ${quiz.queue.length}</span>
      </div>
      <div class="options-grid" id="optionsGrid">
        ${allOpts.map((opt, i) => `
          <button class="option-btn" onclick="selectAnswer(this)" data-val="${escHtml(opt)}">
            <span class="opt-letter">${'ABCD'[i]}</span>
            <span>${escHtml(opt)}</span>
          </button>
        `).join('')}
      </div>
      <div class="feedback-bar" id="feedbackBar">
        <span class="feedback-icon" id="feedbackIcon"></span>
        <div>
          <div id="feedbackText"></div>
          ${word.example ? `<div class="feedback-explanation">"${word.example}"</div>` : ''}
        </div>
      </div>
      <button class="btn-next" id="btnNext" onclick="nextQuestion()">
        ${quiz.current + 1 < quiz.queue.length ? 'Next Word →' : 'See Results 🏆'}
      </button>
    </div>
  `;
}

function escHtml(str) {
  return String(str).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

function levelLabel(l) {
  return l === 'easy' ? '🌱 Easy' : l === 'moderate' ? '🔥 Moderate' : '⭐ Common';
}

function selectAnswer(btn) {
  if (quiz.answered) return;
  quiz.answered = true;
  const selected = btn.dataset.val;
  const correct = quiz._correct;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => {
    b.disabled = true;
    if (b.dataset.val === correct) b.classList.add('correct');
  });

  const fb = document.getElementById('feedbackBar');
  const fbText = document.getElementById('feedbackText');
  const fbIcon = document.getElementById('feedbackIcon');
  const btnNext = document.getElementById('btnNext');

  if (selected === correct) {
    btn.classList.add('correct');
    fb.className = 'feedback-bar show correct';
    fbIcon.textContent = '✓';
    fbText.textContent = 'Excellent! That is correct.';
    quiz.score++;
    confettiPop();
  } else {
    btn.classList.add('wrong');
    fb.className = 'feedback-bar show wrong';
    fbIcon.textContent = '✗';
    fbText.textContent = 'Not quite. The correct answer is: ' + correct;
  }

  btnNext.classList.add('show');
  updateProgress();
}

function nextQuestion() {
  quiz.current++;
  quiz.answered = false;
  renderQuestion();
  updateProgress();
}

function updateProgress() {
  const fill = document.getElementById('progressFill');
  const pct = quiz.queue.length ? (quiz.current / quiz.queue.length) * 100 : 0;
  fill.style.width = pct + '%';
}

function showScore() {
  const section = document.getElementById('quizSection');
  const pct = Math.round((quiz.score / quiz.queue.length) * 100);

  // Update stats
  const stats = getStats();
  stats.total += quiz.queue.length;
  stats.correct += quiz.score;
  stats.sessions++;
  stats.history.unshift({ date: new Date().toLocaleDateString(), score: quiz.score, total: quiz.queue.length, level: quiz.level });
  if (stats.history.length > 20) stats.history.pop();
  saveStats(stats);

  if (quiz.score > getBest()) saveBest(quiz.score);

  updateHeaderStats();

  let emoji = '😐';
  let msg = 'Keep practicing!';
  if (pct >= 90) { emoji = '🏆'; msg = 'Outstanding! You\'re a word master!'; }
  else if (pct >= 70) { emoji = '🌟'; msg = 'Great job! You\'re almost there!'; }
  else if (pct >= 50) { emoji = '👍'; msg = 'Good effort! Practice makes perfect.'; }
  else if (pct < 30) { emoji = '📚'; msg = 'Time to study more words!'; }

  section.innerHTML = `
    <div class="score-card">
      <div class="score-emoji">${emoji}</div>
      <div class="score-title">${msg}</div>
      <div class="score-num">${quiz.score}/${quiz.queue.length}</div>
      <div class="score-sub">${pct}% accuracy — ${quiz.queue.length} words tested</div>
      <div class="score-actions">
        <button class="btn-restart" onclick="startQuiz()">🔄 Try Again</button>
        <button class="btn-primary" onclick="startQuiz('all')">⚡ New Round</button>
      </div>
    </div>
  `;
  document.getElementById('progressFill').style.width = '100%';
}

// ─── Level Selection ───────────────────────────────────────────────────────────
function setLevel(level) {
  quiz.level = level;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.level-btn.${level === 'all' ? 'all' : level}`);
  if (btn) btn.classList.add('active');
  startQuiz(level);
}

// ─── Tabs ──────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  document.getElementById('tab-quiz').style.display = tab === 'quiz' ? 'block' : 'none';
  document.getElementById('tab-library').style.display = tab === 'library' ? 'block' : 'none';
  document.getElementById('tab-stats').style.display = tab === 'stats' ? 'block' : 'none';
  document.querySelectorAll('.nav-tab').forEach((b, i) => {
    b.classList.toggle('active', ['quiz','library','stats'][i] === tab);
  });
  if (tab === 'library') renderLibrary();
  if (tab === 'stats') renderStats();
}

// ─── Library ───────────────────────────────────────────────────────────────────
let libFilter = 'all';
let libSearch = '';
let libPage = 0;
const PER_PAGE = 24;

function renderLibrary() {
  const all = getAllWords();
  let filtered = all;
  if (libFilter !== 'all') filtered = filtered.filter(w => w.level === libFilter);
  if (libSearch) {
    const q = libSearch.toLowerCase();
    filtered = filtered.filter(w => w.word.toLowerCase().includes(q) || w.correct.toLowerCase().includes(q));
  }

  const total = filtered.length;
  const pages = Math.ceil(total / PER_PAGE);
  const start = libPage * PER_PAGE;
  const slice = filtered.slice(start, start + PER_PAGE);

  const grid = document.getElementById('wordsGrid');
  if (!slice.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><p>No words found. Try a different filter or add new words!</p></div>`;
  } else {
    grid.innerHTML = slice.map(w => {
      const isCustom = !BUILTIN_WORDS.find(b => b.word === w.word && b.correct === w.correct);
      return `
        <div class="word-card">
          <div class="word-card-head">
            <div>
              <div class="word-card-word">${w.word}</div>
              <div style="margin-top:4px;display:flex;gap:6px;flex-wrap:wrap">
                ${w.pos ? `<span class="word-type">${w.pos}</span>` : ''}
                <span class="word-level-badge ${w.level}">${levelLabel(w.level)}</span>
                ${isCustom ? '<span style="font-size:0.68rem;background:rgba(192,132,252,0.15);color:var(--accent);border-radius:100px;padding:2px 8px">Custom</span>' : ''}
              </div>
            </div>
            ${isCustom ? `<button class="delete-btn" onclick="deleteWord('${escHtml(w.word)}','${escHtml(w.correct)}')" title="Delete">🗑</button>` : ''}
          </div>
          <div class="word-card-body">${w.correct}</div>
          ${w.example ? `<div style="font-size:0.78rem;color:var(--text-dim);margin-top:6px;font-style:italic">"${w.example}"</div>` : ''}
          <div class="word-card-options">
            <span class="opt-tag correct-tag">✓ ${w.correct.length > 40 ? w.correct.slice(0,40)+'…' : w.correct}</span>
            ${w.options.map(o => `<span class="opt-tag">${o.length > 35 ? o.slice(0,35)+'…' : o}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // Pagination
  const pag = document.getElementById('libraryPagination');
  if (pages <= 1) { pag.innerHTML = ''; return; }
  pag.innerHTML = Array.from({length: pages}, (_, i) =>
    `<button class="page-btn ${i === libPage ? 'active' : ''}" onclick="goLibPage(${i})">${i+1}</button>`
  ).join('');
}

function goLibPage(p) {
  libPage = p;
  renderLibrary();
  document.getElementById('tab-library').scrollIntoView({behavior:'smooth'});
}

function filterLibrary(f) {
  libFilter = f;
  libPage = 0;
  document.querySelectorAll('#tab-library .level-btn').forEach(b => b.classList.remove('active'));
  const map = {all:'lib-all',easy:'lib-easy',moderate:'lib-mod',common:'lib-com'};
  const el = document.getElementById(map[f]);
  if (el) el.classList.add('active');
  renderLibrary();
}

function searchWords(q) {
  libSearch = q;
  libPage = 0;
  renderLibrary();
}

function deleteWord(word, correct) {
  const customs = getCustomWords();
  const idx = customs.findIndex(w => w.word === word && w.correct === correct);
  if (idx !== -1) {
    customs.splice(idx, 1);
    saveCustomWords(customs);
    showToast('Word deleted', 'success');
    renderLibrary();
    updateHeaderStats();
  }
}

// ─── Add Word Modal ────────────────────────────────────────────────────────────
function openAddModal() {
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('inp-word').focus();
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  clearModal();
}
function clearModal() {
  ['inp-word','inp-pos','inp-correct','inp-w1','inp-w2','inp-w3','inp-example'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('inp-level').value = 'common';
}

function saveWord() {
  const word = document.getElementById('inp-word').value.trim();
  const pos = document.getElementById('inp-pos').value.trim();
  const correct = document.getElementById('inp-correct').value.trim();
  const w1 = document.getElementById('inp-w1').value.trim();
  const w2 = document.getElementById('inp-w2').value.trim();
  const w3 = document.getElementById('inp-w3').value.trim();
  const level = document.getElementById('inp-level').value;
  const example = document.getElementById('inp-example').value.trim();

  if (!word) { showToast('Please enter a word', 'error'); return; }
  if (!correct) { showToast('Please enter the correct definition', 'error'); return; }
  if (!w1 || !w2 || !w3) { showToast('Please enter 3 wrong options', 'error'); return; }

  const newWord = { word, pos, correct, options: [w1, w2, w3], level, example };
  const customs = getCustomWords();

  // Check for duplicate
  const exists = getAllWords().find(w => w.word.toLowerCase() === word.toLowerCase());
  if (exists) { showToast('This word already exists!', 'error'); return; }

  customs.push(newWord);
  saveCustomWords(customs);
  closeModal();
  showToast(`"${word}" added successfully! 🎉`, 'success');
  updateHeaderStats();
  if (document.getElementById('tab-library').style.display !== 'none') renderLibrary();
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
function renderStats() {
  const stats = getStats();
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  const total = getAllWords().length;

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-box"><div class="stat-box-label">Total Answered</div><div class="stat-box-val purple">${stats.total}</div></div>
    <div class="stat-box"><div class="stat-box-label">Correct Answers</div><div class="stat-box-val green">${stats.correct}</div></div>
    <div class="stat-box"><div class="stat-box-label">Accuracy</div><div class="stat-box-val amber">${accuracy}%</div></div>
    <div class="stat-box"><div class="stat-box-label">Sessions Played</div><div class="stat-box-val purple">${stats.sessions}</div></div>
    <div class="stat-box"><div class="stat-box-label">Best Score</div><div class="stat-box-val green">${getBest()}/${quiz.total}</div></div>
    <div class="stat-box"><div class="stat-box-label">Words Available</div><div class="stat-box-val amber">${total}</div></div>
  `;

  const activity = document.getElementById('recentActivity');
  if (!stats.history.length) {
    activity.innerHTML = `<div class="empty-state"><p>No sessions yet. Start practicing!</p></div>`;
    return;
  }
  activity.innerHTML = `
    <div class="section-title" style="font-size:1.1rem;margin-bottom:14px;font-family:'DM Sans',sans-serif;font-weight:600;color:var(--text-muted)">Recent Sessions</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${stats.history.map(h => {
        const p = Math.round((h.score/h.total)*100);
        const col = p >= 70 ? 'var(--easy)' : p >= 50 ? 'var(--moderate)' : 'var(--danger)';
        return `
          <div style="display:flex;align-items:center;gap:16px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 18px">
            <div style="font-size:0.82rem;color:var(--text-muted);min-width:80px">${h.date}</div>
            <div style="flex:1;background:var(--surface2);border-radius:100px;height:6px;overflow:hidden">
              <div style="height:100%;width:${p}%;background:${col};border-radius:100px"></div>
            </div>
            <div style="font-family:'DM Mono',monospace;font-size:0.82rem;color:${col};font-weight:600;min-width:50px;text-align:right">${h.score}/${h.total}</div>
            <span class="word-level-badge ${h.level}" style="font-size:0.68rem">${levelLabel(h.level)}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ─── Header Stats ──────────────────────────────────────────────────────────────
function updateHeaderStats() {
  document.getElementById('totalWordsCount').innerHTML = `📚 <strong>${getAllWords().length}</strong> words`;
  document.getElementById('bestScoreCount').innerHTML = `🏆 Best: <strong>${getBest()}/${quiz.total}</strong>`;
}

// ─── Toast ─────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show'); }, 2800);
}

// ─── Confetti ──────────────────────────────────────────────────────────────────
function confettiPop() {
  const colors = ['#c084fc','#818cf8','#34d399','#f59e0b','#f472b6'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;z-index:999;pointer-events:none;
      width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;
      border-radius:${Math.random()>0.5?'50%':'2px'};
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${30+Math.random()*40}%;top:${20+Math.random()*30}%;
      animation:confettiFall 1.2s ease forwards;
      transform:rotate(${Math.random()*360}deg);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}

// Add confetti CSS
const s = document.createElement('style');
s.textContent = `@keyframes confettiFall {
  0% { opacity:1; transform:translateY(0) rotate(0deg); }
  100% { opacity:0; transform:translateY(${150+Math.random()*100}px) rotate(${360+Math.random()*360}deg); }
}`;
document.head.appendChild(s);

// ─── Close modal on overlay click ──────────────────────────────────────────────
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// ─── Keyboard shortcuts ────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (document.getElementById('modalOverlay').classList.contains('open')) {
    if (e.key === 'Escape') closeModal();
    return;
  }
  if (e.key === 'Enter') {
    const next = document.getElementById('btnNext');
    if (next && next.classList.contains('show')) nextQuestion();
  }
  if (!quiz.answered && ['1','2','3','4','a','b','c','d'].includes(e.key.toLowerCase())) {
    const map = {'1':0,'a':0,'2':1,'b':1,'3':2,'c':2,'4':3,'d':3};
    const btns = document.querySelectorAll('.option-btn');
    const idx = map[e.key.toLowerCase()];
    if (btns[idx]) selectAnswer(btns[idx]);
  }
});

// ─── Init ──────────────────────────────────────────────────────────────────────
updateHeaderStats();
startQuiz('all');

</script>

  <!-- PWA Install Banner -->
  <div id="pwa-install-banner">
    <div class="banner-icon">📱</div>
    <div class="banner-text">
      <div class="banner-title">Install LexiQuest</div>
      <div class="banner-sub">Add to home screen for offline use</div>
    </div>
    <button class="banner-btn" id="pwa-install-btn">Install</button>
    <button class="banner-close" id="pwa-dismiss-btn">✕</button>
  </div>

  <!-- Offline indicator -->
  <div id="pwa-offline-toast">⚡ Offline mode — all words available</div>

  <script>
  // ═══════════════ SERVICE WORKER (Inline Blob) ═══════════════
  (function() {
    if (!('serviceWorker' in navigator)) return;

    // Inline the SW as a blob so it works from any file:// or http:// context
    const swCode = `// LexiQuest Service Worker — Full Offline Support
// Caches everything on first load so the app works with NO internet

const CACHE_NAME = 'lexiquest-v1';
const OFFLINE_URLS = [
  './',
  './index.html',
  './manifest.json',
  // icons inlined
];

// ── Install: cache all core files immediately ─────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS);
    }).then(() => {
      // Force the waiting service worker to become the active one
      return self.skipWaiting();
    })
  );
});

// ── Activate: clean up old caches ────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch: serve from cache, fall back to network ────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // For Google Fonts (used by the app) — try network first, then cache
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request)
          .then(response => {
            // Cache the font for offline use
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => cache.match(event.request));
      })
    );
    return;
  }

  // For all other requests — cache first, network fallback
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Cache successful responses
        if (response && response.ok) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        }
        return response;
      }).catch(() => {
        // Fully offline fallback — return the main app page
        return caches.match('./index.html');
      });
    })
  );
});
`;

    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);

    navigator.serviceWorker.register(swUrl, { scope: './' })
      .then(reg => {
        console.log('LexiQuest SW registered:', reg.scope);
        // Check for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('LexiQuest: New content available');
            }
          });
        });
      })
      .catch(err => console.log('LexiQuest SW error:', err));
  })();

  // ═══════════════ INSTALL PROMPT ═══════════════
  (function() {
    let deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    const installBtn = document.getElementById('pwa-install-btn');
    const dismissBtn = document.getElementById('pwa-dismiss-btn');
    const offlineToast = document.getElementById('pwa-offline-toast');

    // Show banner when browser fires beforeinstallprompt
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredPrompt = e;
      // Only show if not dismissed before
      if (!localStorage.getItem('pwa_install_dismissed')) {
        setTimeout(() => banner.classList.add('show'), 2000);
      }
    });

    installBtn && installBtn.addEventListener('click', async () => {
      banner.classList.remove('show');
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('Install outcome:', outcome);
        deferredPrompt = null;
      }
    });

    dismissBtn && dismissBtn.addEventListener('click', () => {
      banner.classList.remove('show');
      localStorage.setItem('pwa_install_dismissed', '1');
    });

    // Hide banner once installed
    window.addEventListener('appinstalled', () => {
      banner.classList.remove('show');
      deferredPrompt = null;
      showToast('App installed! 🎉', 'success');
    });

    // Offline / online indicator
    function updateOnlineStatus() {
      if (!navigator.onLine) {
        offlineToast.classList.add('show');
      } else {
        offlineToast.classList.remove('show');
      }
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  })();
  
