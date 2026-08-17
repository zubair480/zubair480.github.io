export type Hobby = {
  slug: string;
  title: string;
  cadence: string;
  status: string;
  mediaLabel: string;
  description: string;
  note: string;
  accent: "acid" | "sunset" | "blue";
  /**
   * Drop the photo in `public/hobbies/` and set this to `/hobbies/<file>`.
   * While it stays `null` the card renders a styled placeholder instead of a
   * broken image.
   */
  image: string | null;
  imageAlt: string;
  /** CSS object-position for the card crop. Defaults to `center`. */
  imagePosition?: string;
  /** Optional second photo, shown as a small inset on the card media. */
  insetImage?: { src: string; alt: string };
};

export const hobbies: Hobby[] = [
  {
    slug: "swimming",
    title: "Swimming",
    cadence: "In the water",
    status: "Weekly",
    mediaLabel: "Pool day",
    description:
      "Laps are my reset button. An hour where the only thing to think about is the next breath clears a stuck problem faster than another hour at the desk.",
    note: "Pool laps · every week",
    accent: "blue",
    image: null,
    imageAlt: "Zubair Zafar swimming laps at the pool",
  },
  {
    slug: "cooking",
    title: "Cooking",
    cadence: "In the kitchen",
    status: "Most nights",
    mediaLabel: "Table for everyone",
    description:
      "The kitchen is the one place I still build without a keyboard. I cook most of what I eat, and I enjoy feeding a full table even more than eating.",
    note: "From scratch · cooked for a crowd",
    accent: "sunset",
    image: "/hobbies/cooking.jpg",
    imageAlt:
      "A spread of home-cooked dishes laid out on a long table, including pineapple fruit chaat, kheer, corn chaat, salad platters, pasta and rice trays",
    insetImage: {
      src: "/hobbies/cooking-prep.jpg",
      alt: "A plate of toasted buns dressed with ketchup and sauce during prep",
    },
  },
  {
    slug: "skateboarding",
    title: "Skateboarding",
    cadence: "On the board",
    status: "Learning",
    mediaLabel: "First tries",
    description:
      "Firmly in the falling-over phase. It is the most humbling thing on this page and the best reminder that being new at something is completely fine.",
    note: "In progress · sandals and all",
    accent: "acid",
    image: "/hobbies/skateboarding.jpg",
    imageAlt:
      "Both feet balanced on a skateboard on a backyard patio, one on the deck and one on the ground",
    insetImage: {
      src: "/hobbies/skateboarding-face.jpg",
      alt: "Zubair Zafar looking down at the board while finding his balance",
    },
  },
  {
    slug: "driving",
    title: "Driving",
    cadence: "On the road",
    status: "New",
    mediaLabel: "First drives",
    description:
      "I learned to drive recently and the map opened up. Trailheads, grocery runs and long weekend routes all moved from someday to this weekend.",
    note: "Recently licensed · road trips next",
    accent: "sunset",
    image: null,
    imageAlt: "Zubair Zafar behind the wheel of a car",
  },
  {
    slug: "hiking",
    title: "Hiking",
    cadence: "On the trail",
    status: "Weekends",
    mediaLabel: "Trail day",
    description:
      "Bay Area ridges now, hill trails before that. A long climb that ends with a view is my favorite way to close out a week of building.",
    note: "Weekend climbs · view at the top",
    accent: "acid",
    image: "/hobbies/hiking.jpg",
    imageAlt:
      "Zubair Zafar at the top of a hill trail, with a hazy city and valley spread out below",
    imagePosition: "center 35%",
  },
  {
    slug: "badminton",
    title: "Badminton",
    cadence: "On the court",
    status: "Regular",
    mediaLabel: "Match point",
    description:
      "The fastest game on this page. Long rallies, quick feet and a scoreline that stays honest about how fit I actually am that week.",
    note: "Doubles · long rallies",
    accent: "blue",
    image: null,
    imageAlt: "Zubair Zafar playing badminton",
  },
  {
    slug: "pickleball",
    title: "Pickleball",
    cadence: "Across the net",
    status: "New",
    mediaLabel: "Weekend game",
    description:
      "The newest one, and the easiest to talk people into. Simple rules, short games and a group that gets bigger every time we play.",
    note: "Weekend games · easy to teach",
    accent: "sunset",
    image: "/hobbies/pickleball.jpg",
    imageAlt:
      "Zubair Zafar dropping low with the paddle back as the ball comes over the net on an outdoor pickleball court",
  },
  {
    slug: "lifting",
    title: "Lifting",
    cadence: "In the weight room",
    status: "Routine",
    mediaLabel: "Campus weight room",
    description:
      "The least exciting habit here and the one that holds up all the others. Show up, add a little weight, repeat. Progress shows up in small increments.",
    note: "Weekday sessions · small increments",
    accent: "acid",
    image: "/hobbies/gym.jpg",
    imageAlt: "Zubair Zafar in the campus recreation weight room",
    imagePosition: "center 12%",
  },
];
