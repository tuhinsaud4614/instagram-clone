import { IPost, ITag, IUser } from "./interfaces";

export const demoUsers: IUser[] = [
  {
    fullName: "The Spicy",
    id: "1",
    isVerified: true,
    profilePictureUrl: "avatar.jpeg",
    username: "the_spicy",
  },
  {
    fullName: "The Moon",
    id: "2",
    isVerified: true,
    profilePictureUrl: "avatar.jpeg",
    username: "the_moon",
  },
  {
    fullName: "The Moon",
    id: "3",
    isVerified: true,
    profilePictureUrl: "avatar.jpeg",
    username: "the_moon",
  },
  {
    fullName: "The Sun",
    id: "4",
    isVerified: true,
    profilePictureUrl: "avatar.jpeg",
    username: "the_sun",
  },
  {
    fullName: "The Light",
    id: "5",
    isVerified: true,
    profilePictureUrl: "avatar.jpeg",
    username: "the_light",
  },
];

export const demoTags: ITag[] = [
  { id: "1", posts: 10000, slug: "thespicy", title: "thespicy" },
  { id: "2", posts: 1, slug: "moon", title: "moon" },
  { id: "4", posts: 20000, slug: "nice", title: "nice" },
  { id: "5", posts: 100, slug: "thesun", title: "thesun" },
  { id: "6", posts: 200, slug: "light", title: "light" },
];

export const demoPosts: IPost[] = [
  {
    caption:
      "𝗧𝗛𝗘 𝗧𝗘𝗔𝗠\n Els dorsals del primer equip 👀 \n ¡Así quedan los dorsales! 👉",
    id: "abc",
    slug: "abc",
    likers: demoUsers,
    numComments: 11,
    numLikes: 10,
    owner: {
      fullName: "The Spicy",
      id: "1",
      isVerified: false,
      profilePictureUrl: "avatar.jpeg",
      username: "the_spicy",
    },
    postedAt: Date.now(),
    resources: [
      {
        height: 719,
        width: 1080,
        src: "avatar.jpeg",
        type: "image",
      },
      {
        height: 719,
        width: 1080,
        src: "avatar.jpeg",
        type: "image",
      },
    ],
  },
  {
    caption: `the123_ffff gfffhh
      #tiktok_gf# fffyem
      @the_now.ffv@  ggg gfff`,
    id: "cde",
    slug: "cde",
    likers: demoUsers,
    numComments: 11,
    numLikes: 10,
    owner: {
      fullName: "The Spicy",
      id: "1",
      isVerified: false,
      profilePictureUrl: "avatar.jpeg",
      username: "the_spicy",
    },
    postedAt: Date.now(),
    resources: [
      {
        height: 1160,
        width: 1160,
        src: "avatar.jpeg",
        type: "image",
      },
    ],
  },
  {
    caption: `the123_ffff gfffhh
      #tiktok_gf fffyem
      @the_now.ffv  ggg gfff`,
    id: "fgh",
    slug: "fgh",
    likers: [],
    numComments: 11,
    numLikes: 10,
    owner: {
      fullName: "The Moon",
      id: "1",
      isVerified: false,
      profilePictureUrl: "avatar.jpeg",
      username: "the_moon",
    },
    postedAt: Date.now(),
    resources: [
      {
        height: 1160,
        width: 1160,
        src: "video.mp4",
        type: "video",
      },
    ],
    thumbnailSrc: "avatar.jpeg",
  },
];

export const emojis = {
  "Most Popular": [
    "😂",
    "😮",
    "😍",
    "😢",
    "👏",
    "🔥",
    "🎉",
    "💯",
    "❤️",
    "🤣",
    "🥰",
    "😘",
    "😭",
    "😊",
  ],
  "Smileys & People": [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "☺",
    "😚",
    "😙",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "🤥",
    "😌",
    "😔",
    "😪",
    "🤤",
    "😴",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🥵",
    "🥶",
    "🥴",
    "😵",
    "🤯",
    "🤠",
    "🥳",
    "😎",
    "🤓",
    "🧐",
    "😕",
    "😟",
    "🙁",
    "☹",
    "😮",
    "😯",
    "😲",
    "😳",
    "🥺",
    "😦",
    "😧",
    "😨",
    "😰",
    "😥",
    "😢",
    "😭",
    "😱",
    "😖",
    "😣",
    "😞",
    "😓",
    "😩",
    "😫",
    "😤",
    "😡",
    "😠",
    "🤬",
    "😈",
    "👿",
    "💀",
    "☠",
    "💩",
    "🤡",
    "👹",
    "👺",
    "👻",
    "👽",
    "👾",
    "🤖",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "💋",
    "👋",
    "🤚",
    "🖐",
    "✋",
    "🖖",
    "👌",
    "✌",
    "🤞",
    "🤟",
    "🤘",
    "🤙",
    "👈",
    "👉",
    "👆",
    "🖕",
    "👇",
    "☝",
    "👍",
    "👎",
    "✊",
    "👊",
    "🤛",
    "🤜",
    "👏",
    "🙌",
    "👐",
    "🤲",
    "🤝",
    "🙏",
    "✍",
    "💅",
    "🤳",
    "💪",
    "🦵",
    "🦶",
    "👂",
    "👃",
    "🧠",
    "🦷",
    "🦴",
    "👀",
    "👁",
    "👅",
    "👄",
    "👶",
    "🧒",
    "👦",
    "👧",
    "🧑",
    "👱",
    "👨",
    "🧔",
    "👨‍🦰",
    "👨‍🦱",
    "👨‍🦳",
    "👨‍🦲",
    "👩",
    "👩‍🦰",
    "👩‍🦱",
    "👩‍🦳",
    "👩‍🦲",
    "👱‍♀️",
    "👱‍♂️",
    "🧓",
    "👴",
    "👵",
    "🙍",
    "🙍‍♂️",
    "🙍‍♀️",
    "🙎",
    "🙎‍♂️",
    "🙎‍♀️",
    "🙅",
    "🙅‍♂️",
    "🙅‍♀️",
    "🙆",
    "🙆‍♂️",
    "🙆‍♀️",
    "💁",
    "💁‍♂️",
    "💁‍♀️",
    "🙋",
    "🙋‍♂️",
    "🙋‍♀️",
    "🙇",
    "🙇‍♂️",
    "🙇‍♀️",
    "🤦",
    "🤦‍♂️",
    "🤦‍♀️",
    "🤷",
    "🤷‍♂️",
    "🤷‍♀️",
    "👨‍⚕️",
    "👩‍⚕️",
    "👨‍🎓",
    "👩‍🎓",
    "👨‍🏫",
    "👩‍🏫",
    "👨‍⚖️",
    "👩‍⚖️",
    "👨‍🌾",
    "👩‍🌾",
    "👨‍🍳",
    "👩‍🍳",
    "👨‍🔧",
    "👩‍🔧",
    "👨‍🏭",
    "👩‍🏭",
    "👨‍💼",
    "👩‍💼",
    "👨‍🔬",
    "👩‍🔬",
    "👨‍💻",
    "👩‍💻",
    "👨‍🎤",
    "👩‍🎤",
    "👨‍🎨",
    "👩‍🎨",
    "👨‍✈️",
    "👩‍✈️",
    "👨‍🚀",
    "👩‍🚀",
    "👨‍🚒",
    "👩‍🚒",
    "👮",
    "👮‍♂️",
    "👮‍♀️",
    "🕵",
    "🕵️‍♂️",
    "🕵️‍♀️",
    "💂",
    "💂‍♂️",
    "💂‍♀️",
    "👷",
    "👷‍♂️",
    "👷‍♀️",
    "🤴",
    "👸",
    "👳",
    "👳‍♂️",
    "👳‍♀️",
    "👲",
    "🧕",
    "�",
    "👰",
    "🤰",
    "🤱",
    "👼",
    "🎅",
    "🤶",
    "🦸",
    "🦸‍♂️",
    "🦸‍♀️",
    "🦹",
    "🦹‍♂️",
    "🦹‍♀️",
    "🧙",
    "🧙‍♂️",
    "🧙‍♀️",
    "🧚",
    "🧚‍♂️",
    "🧚‍♀️",
    "🧛",
    "🧛‍♂️",
    "🧛‍♀️",
    "🧜",
    "🧜‍♂️",
    "🧜‍♀️",
    "🧝",
    "🧝‍♂️",
    "🧝‍♀️",
    "🧞",
    "🧞‍♂️",
    "🧞‍♀️",
    "🧟",
    "🧟‍♂️",
    "🧟‍♀️",
    "💆",
    "💆‍♂️",
    "💆‍♀️",
    "💇",
    "💇‍♂️",
    "💇‍♀️",
    "🚶",
    "🚶‍♂️",
    "🚶‍♀️",
    "🏃",
    "🏃‍♂️",
    "🏃‍♀️",
    "💃",
    "🕺",
    "🕴",
    "👯",
    "👯‍♂️",
    "👯‍♀️",
    "🧖",
    "🧖‍♂️",
    "🧖‍♀️",
    "🧘",
    "👭",
    "👫",
    "👬",
    "💏",
    "👨‍❤️‍💋‍👨",
    "👩‍❤️‍💋‍👩",
    "💑",
    "👨‍❤️‍👨",
    "👩‍❤️‍👩",
    "👪",
    "👨‍👩‍👦",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "👨‍👦",
    "👨‍👦‍👦",
    "👨‍👧",
    "👨‍👧‍👦",
    "👨‍👧‍👧",
    "👩‍👦",
    "👩‍👦‍👦",
    "👩‍👧",
    "👩‍👧‍👦",
    "👩‍👧‍👧",
    "🗣",
    "👤",
    "👥",
    "👣",
    "🧳",
    "🌂",
    "☂",
    "🧵",
    "🧶",
    "👓",
    "🕶",
    "🥽",
    "🥼",
    "👔",
    "👕",
    "👖",
    "🧣",
    "🧤",
    "🧥",
    "🧦",
    "👗",
    "👘",
    "👙",
    "👚",
    "👛",
    "👜",
    "👝",
    "🎒",
    "👞",
    "👟",
    "🥾",
    "🥿",
    "👠",
    "👡",
    "👢",
    "👑",
    "👒",
    "🎩",
    "🎓",
    "🧢",
    "⛑",
    "💄",
    "💍",
    "💼",
  ],
  "Animals & Nature": [
    "🙈",
    "🙉",
    "🙊",
    "💥",
    "💫",
    "💦",
    "💨",
    "🐵",
    "🐒",
    "🦍",
    "🐶",
    "🐕",
    "🐩",
    "🐺",
    "🦊",
    "🦝",
    "🐱",
    "🐈",
    "🦁",
    "🐯",
    "🐅",
    "🐆",
    "🐴",
    "🐎",
    "🦄",
    "🦓",
    "🦌",
    "🐮",
    "🐂",
    "🐃",
    "🐄",
    "🐷",
    "🐖",
    "🐗",
    "🐽",
    "🐏",
    "🐑",
    "🐐",
    "🐪",
    "🐫",
    "🦙",
    "🦒",
    "🐘",
    "🦏",
    "🦛",
    "🐭",
    "🐁",
    "🐀",
    "🐹",
    "🐰",
    "🐇",
    "🐿",
    "🦔",
    "🦇",
    "🐻",
    "🐨",
    "🐼",
    "🦘",
    "🦡",
    "🐾",
    "🦃",
    "🐔",
    "🐓",
    "🐣",
    "🐤",
    "🐥",
    "🐦",
    "🐧",
    "🕊",
    "🦅",
    "🦆",
    "🦢",
    "🦉",
    "🦚",
    "🦜",
    "🐸",
    "🐊",
    "🐢",
    "🦎",
    "🐍",
    "🐲",
    "🐉",
    "🦕",
    "🦖",
    "🐳",
    "🐋",
    "🐬",
    "🐟",
    "🐠",
    "🐡",
    "🦈",
    "🐙",
    "🐚",
    "🐌",
    "🦋",
    "🐛",
    "🐜",
    "🐝",
    "🐞",
    "🦗",
    "🕷",
    "🕸",
    "🦂",
    "🦟",
    "🦠",
    "💐",
    "🌸",
    "💮",
    "🏵",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌾",
    "🌿",
    "☘",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍄",
    "🌰",
    "🦀",
    "🦞",
    "🦐",
    "🦑",
    "🌍",
    "🌎",
    "🌏",
    "🌐",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌙",
    "🌚",
    "🌛",
    "🌜",
    "☀",
    "🌝",
    "🌞",
    "⭐",
    "🌟",
    "🌠",
    "☁",
    "⛅",
    "⛈",
    "🌤",
    "🌥",
    "🌦",
    "🌧",
    "🌨",
    "🌩",
    "🌪",
    "🌫",
    "🌬",
    "🌈",
    "☂",
    "☔",
    "⚡",
    "❄",
    "☃",
    "⛄",
    "☄",
    "🔥",
    "💧",
    "🌊",
    "🎄",
    "✨",
    "🎋",
    "🎍",
  ],
  "Food & Drink": [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶",
    "🥒",
    "🥬",
    "🥦",
    "🍄",
    "🥜",
    "🌰",
    "🍞",
    "🥐",
    "🥖",
    "🥨",
    "🥯",
    "🥞",
    "🧀",
    "🍖",
    "🍗",
    "🥩",
    "🥓",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🥪",
    "🌮",
    "🌯",
    "🥙",
    "🍳",
    "🥘",
    "🍲",
    "🥣",
    "🥗",
    "🍿",
    "🧂",
    "🥫",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍠",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🥮",
    "🍡",
    "🥟",
    "🥠",
    "🥡",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🧁",
    "🥧",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "☕",
    "🍵",
    "🍶",
    "🍾",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🥂",
    "🥃",
    "🥤",
    "🥢",
    "🍽",
    "🍴",
    "🥄",
  ],
  Activities: [
    "🕴",
    "🧗",
    "🧗‍♂️",
    "🧗‍♀️",
    "🏇",
    "⛷",
    "🏂",
    "🏌",
    "🏌️‍♂️",
    "🏌️‍♀️",
    "🏄",
    "🏄‍♂️",
    "🏄‍♀️",
    "🚣",
    "🚣‍♂️",
    "🚣‍♀️",
    "🏊",
    "🏊‍♂️",
    "🏊‍♀️",
    "⛹",
    "⛹️‍♂️",
    "⛹️‍♀️",
    "🏋",
    "🏋️‍♂️",
    "🏋️‍♀️",
    "🚴",
    "🚴‍♂️",
    "🚴‍♀️",
    "🚵",
    "🚵‍♂️",
    "🚵‍♀️",
    "🤸",
    "🤸‍♂️",
    "🤸‍♀️",
    "🤼",
    "🤼‍♂️",
    "🤼‍♀️",
    "🤽",
    "🤽‍♂️",
    "🤽‍♀️",
    "🤾",
    "🤾‍♂️",
    "🤾‍♀️",
    "🤹",
    "🤹‍♂️",
    "🤹‍♀️",
    "🧘",
    "🧘‍♂️",
    "🧘‍♀️",
    "🎪",
    "🛹",
    "🎗",
    "🎟",
    "🎫",
    "🎖",
    "🏆",
    "🏅",
    "🥇",
    "🥈",
    "🥉",
    "⚽",
    "⚾",
    "🥎",
    "🏀",
    "🏐",
    "🏈",
    "🏉",
    "🎾",
    "🥏",
    "🎳",
    "🏏",
    "🏑",
    "🏒",
    "🥍",
    "🏓",
    "🏸",
    "🥊",
    "🥋",
    "⛳",
    "⛸",
    "🎣",
    "🎽",
    "🎿",
    "🛷",
    "🥌",
    "🎯",
    "🎱",
    "🎮",
    "🎰",
    "🎲",
    "🧩",
    "♟",
    "🎭",
    "🎨",
    "🧵",
    "🧶",
    "🎼",
    "🎤",
    "🎧",
    "🎷",
    "🎸",
    "🎹",
    "🎺",
    "🎻",
    "🥁",
    "🎬",
    "🏹",
  ],
  "Travel & Places": [
    "🚣",
    "🗾",
    "🏔",
    "⛰",
    "🌋",
    "🗻",
    "🏕",
    "🏖",
    "🏜",
    "🏝",
    "🏞",
    "🏟",
    "🏛",
    "🏗",
    "🏘",
    "🏚",
    "🏠",
    "🏡",
    "🏢",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏩",
    "🏪",
    "🏫",
    "🏬",
    "🏭",
    "🏯",
    "🏰",
    "💒",
    "🗼",
    "🗽",
    "⛪",
    "🕌",
    "🕍",
    "⛩",
    "🕋",
    "⛲",
    "⛺",
    "🌁",
    "🌃",
    "🏙",
    "🌄",
    "🌅",
    "🌆",
    "🌇",
    "🌉",
    "🎠",
    "🎡",
    "🎢",
    "🚂",
    "🚃",
    "🚄",
    "🚅",
    "🚆",
    "🚇",
    "🚈",
    "🚉",
    "🚊",
    "🚝",
    "🚞",
    "🚋",
    "🚌",
    "🚍",
    "🚎",
    "🚐",
    "🚑",
    "🚒",
    "🚓",
    "🚔",
    "🚕",
    "🚖",
    "🚗",
    "🚘",
    "🚚",
    "🚛",
    "🚜",
    "🏎",
    "🏍",
    "🛵",
    "🚲",
    "🛴",
    "🚏",
    "🛤",
    "⛽",
    "🚨",
    "🚥",
    "🚦",
    "🚧",
    "⚓",
    "⛵",
    "🚤",
    "🛳",
    "⛴",
    "🛥",
    "🚢",
    "✈",
    "🛩",
    "🛫",
    "🛬",
    "💺",
    "🚁",
    "🚟",
    "🚠",
    "🚡",
    "🛰",
    "🚀",
    "🛸",
    "🌠",
    "🌌",
    "⛱",
    "🎆",
    "🎇",
    "🎑",
    "💴",
    "💵",
    "💶",
    "💷",
    "🗿",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
  ],
  Objects: [
    "💌",
    "🕳",
    "💣",
    "🛀",
    "🛌",
    "🔪",
    "🏺",
    "🗺",
    "🧭",
    "🧱",
    "💈",
    "🛢",
    "🛎",
    "🧳",
    "⌛",
    "⏳",
    "⌚",
    "⏰",
    "⏱",
    "⏲",
    "🕰",
    "🌡",
    "⛱",
    "🧨",
    "🎈",
    "🎉",
    "🎊",
    "🎎",
    "🎏",
    "🎐",
    "🧧",
    "🎀",
    "🎁",
    "🔮",
    "🧿",
    "🕹",
    "🧸",
    "🖼",
    "🧵",
    "🧶",
    "🛍",
    "📿",
    "💎",
    "📯",
    "🎙",
    "🎚",
    "🎛",
    "📻",
    "📱",
    "📲",
    "☎",
    "📞",
    "📟",
    "📠",
    "🔋",
    "🔌",
    "💻",
    "🖥",
    "🖨",
    "⌨",
    "🖱",
    "🖲",
    "💽",
    "💾",
    "💿",
    "📀",
    "🧮",
    "🎥",
    "🎞",
    "📽",
    "📺",
    "📷",
    "📸",
    "📹",
    "📼",
    "🔍",
    "🔎",
    "🕯",
    "💡",
    "🔦",
    "🏮",
    "📔",
    "📕",
    "📖",
    "📗",
    "📘",
    "📙",
    "📚",
    "📓",
    "📃",
    "📜",
    "📄",
    "📰",
    "🗞",
    "📑",
    "🔖",
    "🏷",
    "💰",
    "💴",
    "💵",
    "💶",
    "💷",
    "💸",
    "💳",
    "🧾",
    "✉",
    "📧",
    "📨",
    "📩",
    "📤",
    "📥",
    "📦",
    "📫",
    "📪",
    "📬",
    "📭",
    "📮",
    "🗳",
    "✏",
    "✒",
    "🖋",
    "🖊",
    "🖌",
    "🖍",
    "📝",
    "📁",
    "📂",
    "🗂",
    "📅",
    "📆",
    "🗒",
    "🗓",
    "📇",
    "📈",
    "📉",
    "📊",
    "📋",
    "📌",
    "📍",
    "📎",
    "🖇",
    "📏",
    "📐",
    "✂",
    "🗃",
    "🗄",
    "🗑",
    "🔒",
    "🔓",
    "🔏",
    "🔐",
    "🔑",
    "🗝",
    "🔨",
    "⛏",
    "⚒",
    "🛠",
    "🗡",
    "⚔",
    "🔫",
    "🛡",
    "🔧",
    "🔩",
    "⚙",
    "🗜",
    "⚖",
    "🔗",
    "⛓",
    "🧰",
    "🧲",
    "⚗",
    "🧪",
    "🧫",
    "🧬",
    "🔬",
    "🔭",
    "📡",
    "💉",
    "💊",
    "🚪",
    "🛏",
    "🛋",
    "🚽",
    "🚿",
    "🛁",
    "🧴",
    "🧷",
    "🧹",
    "🧺",
    "🧻",
    "🧼",
    "🧽",
    "🧯",
    "🚬",
    "⚰",
    "⚱",
    "🗿",
    "🚰",
  ],
  Symbols: [
    "💘",
    " 💝",
    "💖",
    "💗",
    "💓",
    "💞",
    "💕",
    "💟",
    "❣",
    "💔",
    "❤",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "💯",
    "💢",
    "💬",
    "👁️‍🗨️",
    "🗯",
    "💭",
    "💤",
    "💮",
    "♨",
    "💈",
    "🛑",
    "🕛",
    "🕧",
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
    "🌀",
    "♠",
    "♥",
    "♦",
    "♣",
    "🃏",
    "🀄",
    "🎴",
    "🔇",
    "🔈",
    "🔉",
    "🔊",
    "📢",
    "📣",
    "📯",
    "🔔",
    "🔕",
    "🎵",
    "🎶",
    "🏧",
    "🚮",
    "🚰",
    "♿",
    "🚹",
    "🚺",
    "🚻",
    "🚼",
    "🚾",
    "⚠",
    "🚸",
    "⛔",
    "🚫",
    "🚳",
    "🚭",
    "🚯",
    "🚱",
    "🚷",
    "🔞",
    "☢",
    "☣",
    "⬆",
    "↗",
    "➡",
    "↘",
    "⬇",
    "↙",
    "⬅",
    "↖",
    "↕",
    "↔",
    "↩",
    "↪",
    "⤴",
    "⤵",
    "🔃",
    "🔄",
    "🔙",
    "🔚",
    "🔛",
    "🔜",
    "🔝",
    "🛐",
    "⚛",
    "🕉",
    "✡",
    "☸",
    "☯",
    "✝",
    "☦",
    "☪",
    "☮",
    "🕎",
    "🔯",
    "♈",
    "♉",
    "♊",
    "♋",
    "♌",
    "♍",
    "♎",
    "♏",
    "♐",
    "♑",
    "♒",
    "♓",
    "⛎",
    "🔀",
    "🔁",
    "🔂",
    "▶",
    "⏩",
    "◀",
    "⏪",
    "🔼",
    "⏫",
    "🔽",
    "⏬",
    "⏹",
    "⏏",
    "🎦",
    "🔅",
    "🔆",
    "📶",
    "📳",
    "📴",
    "✖",
    "➕",
    "➖",
    "➗",
    "♾",
    "‼",
    "⁉",
    "❓",
    "❔",
    "❕",
    "❗",
    "♻",
    "🔱",
    "📛",
    "🔰",
    "⭕",
    "✅",
    "☑",
    "✔",
    "❌",
    "❎",
    "➰",
    "➿",
    "〽",
    "✳",
    "✴",
    "❇",
    "©",
    "®",
    "™",
    "#️⃣",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
    "🔠",
    "🔡",
    "🔢",
    "🔣",
    "🔤",
    "🅰",
    "🆎",
    "🅱",
    "🆑",
    "🆒",
    "🆓",
    "ℹ",
    "🆔",
    "Ⓜ",
    "🆕",
    "🆖",
    "🅾",
    "🆗",
    "🅿",
    "🆘",
    "🆙",
    "🆚",
    "🈁",
    "🈂",
    "🈷",
    "🈶",
    "🈯",
    "🉐",
    "🈹",
    "🈚",
    "🈲",
    "🉑",
    "🈸",
    "🈴",
    "🈳",
    "㊗",
    "㊙",
    "🈺",
    "🈵",
    "🔴",
    "🔵",
    "⚫",
    "⚪",
    "⬛",
    "⬜",
    "◼",
    "◻",
    "◾",
    "◽",
    "▪",
    "▫",
    "🔶",
    "🔷",
    "🔸",
    "🔹",
    "🔺",
    "🔻",
    "💠",
    "🔳",
    "🔲",
  ],
};
