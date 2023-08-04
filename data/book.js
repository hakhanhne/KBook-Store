const books = [
  {
    id:1,
    title:"Gone Girl",
    author:"Gillian Flynn",
    published_year:"2012",
    description:
    `
    Gone Girl is a 2012 crime thriller novel by American writer Gillian Flynn.
    `,
    price:50,
    cover: "https://cdn-amz.woka.io/images/I/71FZo7-3BnL.jpg",
    photos: []
  },
  {
    id:2,
    title:"The Shining",
    author:"Stephen King",
    published_year:"1977",
    description:
    ``,
    price:50,
    cover:"https://upload.wikimedia.org/wikipedia/commons/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg",
    photos: []
  },
  {
    id:3,
    title:"The Girl on the Train",
    author:"Paula Hawkins",
    published_year:"2015",
    description:
    ``,
    price:50,
    cover:"",
    photos: []
  },
  {
    id:4,
    title:"Red Dragon",
    author:"Thomas Harris",
    published_year:"1981",
    description:
    `
    Red Dragon is a psychological horror novel by American author Thomas Harris, first published in 1981.
    
    The plot follows former FBI profiler Will Graham, who comes out of retirement to find and apprehend an enigmatic serial killer nicknamed "the Tooth Fairy". 
    In the backstory of the 1981 novel Red Dragon, FBI profiler Will Graham interviews Lecter about one of his patients who was murdered by a serial killer, before intuiting that Lecter is the culprit; he sees the antique medical diagram "Wound Man" in Lecter's office, and remembers that the victim suffered the same injuries depicted in the drawing. Realizing that Graham is on to him, Lecter creeps up behind Graham and stabs him with a linoleum knife, nearly disemboweling him.
    Graham survives, but is so traumatized by the incident that he takes early retirement from the FBI. Lecter is charged with a series of nine murders, but is found not guilty by reason of insanity. He is institutionalized in the Baltimore State Hospital for the Criminally Insane under the care of Dr. Frederick Chilton, a pompous, incompetent psychiatrist whom he despises, and who subjects him to a series of petty cruelties.
    Some years later, Graham comes out of retirement and consults Lecter in order to catch another serial killer, Francis Dolarhyde, known by the nickname "the Tooth Fairy". Through the classifieds of a tabloid called The National Tattler, Lecter provides Dolarhyde with Graham's home address; Dolarhyde later uses this information to break into Graham's home, stab him in the face, and threaten his family before Graham's wife Molly shoots him dead. At the end of the novel, Lecter sends Graham a letter, saying that he hopes Graham "won't be very ugly".    
    `,
    price:50,
    cover:"https://m.media-amazon.com/images/I/81dkf1dFePL._AC_UF1000,1000_QL80_.jpg",
    photos: []
  },
  {
    id:5,
    title:"The Silence of the Lambs",
    author:"Thomas Harris",
    published_year:"1988",
    description:
    `
    The Silence of the Lambs is a 1988 psychological horror novel by Thomas Harris.

    As part of the search for a serial murderer, Jame Gumb, known by the nickname "Buffalo Bill", FBI trainee Clarice Starling is given an assignment. She must visit a man confined to a high-security facility for the criminally insane and interview him.
    That man, Dr. Hannibal Lecter, is a former psychiatrist with unusual tastes and an intense curiosity about the darker corners of the mind.
    Lecter had previously met Gumb, the former lover of his patient (and eventual victim) Benjamin Raspail. He does not reveal this information directly, instead giving Starling vague clues to help her figure it out for herself. In return for Lecter's assistance, the FBI and Chilton arrange for him to be transferred to a federal institution with better living conditions.
    Lecter escapes while in transit, however, killing and mutilating his guards and using one of their faces as a mask to fool police and paramedics before killing the latter and escaping. While in hiding, he writes one letter to Starling wishing her well, a second to Barney (his primary orderly at the asylum), thanking him for his courteous treatment, and a third to Chilton, promising gruesome revenge; Chilton disappears soon afterward.
    Lecter's intimate understanding of the killer and of Clarice herself form the core of Thomas Harris' The Silence of the Lambs -- an unforgettable classic of suspense fiction.
    `,
    price:50,
    cover:"https://upload.wikimedia.org/wikipedia/en/6/62/Silence3.png",
    photos: ["https://i0.wp.com/www.raptisrarebooks.com/images/116914/the-silence-of-the-lambs-thomas-harris-first-edition-signed-1988-rare-william-sessions.jpg"]
  },
  {
    id:6,
    title:"Zodiac",
    author:"Robert Graysmith",
    published_year:"1986",
    description:
    `
    Zodiac is a non-fiction book written by Robert Graysmith about the unsolved serial murders committed by the "Zodiac Killer" in San Francisco in the late 1960s and early '70s
    A sexual sadist, the Zodiac killer took pleasure in torture and murder. His first victims were a teenage couple, stalked and shot dead in a lovers’ lane. After another slaying, he sent his first mocking note to authorities, promising he would kill more. The official tally of his victims was six. He claimed thirty-seven dead. The real toll may have reached fifty.    
    `,
    price:50,
    cover:"https://m.media-amazon.com/images/I/81xni8WlLhL._AC_UF1000,1000_QL80_.jpg",
    photos: []
  },
  {
    id:7,
    title:"It",
    author:"Stephen King",
    published_year:"1986",
    description:
    `
    
    `,
    price:50,
    cover:"https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/04/It-Clown.jpg",
    photos: []
  },
  {
    id:8,
    title:"The Ousider",
    author:"Stephen King",
    published_year:"2018",
    description:
    `
    The Outsider (2018) is a horror novel by the American author Stephen King.
    An eleven-year-old boy’s violated corpse is discovered in a town park. Eyewitnesses and fingerprints point unmistakably to one of Flint City’s most popular citizens—Terry Maitland, Little League coach, English teacher, husband, and father of two girls. Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest. Maitland has an alibi, but Anderson and the district attorney soon have DNA evidence to go with the fingerprints and witnesses. Their case seems ironclad.

    As the investigation expands and horrifying details begin to emerge, King’s story kicks into high gear, generating strong tension and almost unbearable suspense. Terry Maitland seems like a nice guy, but is he wearing another face? When the answer comes, it will shock you as only Stephen King can.
    `,
    price:50,
    cover:"https://static.wikia.nocookie.net/stephenking/images/0/01/The_Outsider_cover.jpg",
    photos: []
  },
  {
    id:9,
    title:"Frankenstein",
    author:"Mary Shelley",
    published_year:"1818",
    description:
    `
    On a stormy summer night in 1816, eighteen-year-old Mary Shelley sat down to write a ghost story. What poured from her pen that fateful night would change the world, revolutionizing our understanding of artificial life, bewitching generations of readers, and pioneering science fiction as we now know it.

    Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.

    Dr. Victor Frankenstein builds a creature out of scavenged body parts, recoils from his creation, then sees all that he loves destroyed by his spurned progeny. In this landmark novel, Shelley fused a primordial parable with the upheavals and anxieties of the Industrial Revolution, and in doing so, laid the foundation for the themes and constructs of science fiction. 
    The weighty questions she poses in Frankenstein continue to animate the genre to this very day. Why do we harbor such fear of the other? How responsible are we for our creations, and what does it mean when they develop agency of their own? Where’s the line between what science can do, and what it should do? Frankenstein strikes at the very heart of what it means to be human. It also rewards repeat readings—so much so that, even two centuries later, we’re still peering at it through new lenses, as queer, transhumanist, and feminist readings locate new depths within the familiar text. Plenty of imitators have tried to match the heights of Frankenstein, but none have come close. We owe everything to Shelley’s ur-textual story of modernity, morality, and progress’ great and terrible cost.
    `,
    price:50,
    cover:"https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UF1000,1000_QL80_.jpg",
    photos: []
  },
  {
    id:10,
    title:"Kindred",
    author:"Octavia Butler",
    published_year:"1979",
    description:
    `
    Octavia Butler’s contributions to science fiction and Afrofuturism are legendary, meaning that selecting just one of her works for this list was a tall order. But Kindred, perhaps her best-known novel, stood out above the rest as a master class in the ability of science fiction to speak to the contemporary moment. 
    This is the story of Dana, a Black woman in Los Angeles circa 1976, who finds herself violently transported back in time to the antebellum plantation where her ancestors were enslaved. Each time she pinballs through past and present, Dana’s stays at the plantation become longer and more dangerous, forcing her to confront the gruesome legacies of slavery, misogynoir, and white supremacy. 
    As Harlan Ellison once said, “Octavia Butler is a writer who will be with us for a long, long time, and Kindred is that rare magical artifact… the novel one returns to, again and again.” Almost like time travel, we keep coming back to it.
    `,
    price:50,
    cover:"https://s3.amazonaws.com/loa-production-23ffs35gui41a/article_images/images/000/001/936/big/210322_kindred_banner.jpg",
    photos: [
      "https://1.bp.blogspot.com/-lAV-ZpWEO-U/YBZBB7yyJxI/AAAAAAAADnw/MBPlt49oZBEwMbZhhHYbf7HZ3yJKfiFjQCNcBGAsYHQ/s0/Schwinger.jpg",
      "https://images.squarespace-cdn.com/content/v1/5af9a86fc3c16a3922fe3d13/1529511727301-B7YMVD7UT0LL323OEKOU/octavia-butler-kindred-gn-+-+Copy.jpg"
    ]
  },
  {
    id:11,
    title:"Journey to the Center of the Earth",
    author:"Jules Verne",
    published_year:"1864",
    description:
    `
    Verne’s classic tale Journey to the Center of the Earth  is a personal favourite of this writer; one of the best sci-fi books to elicit repeated reactions of excitement and wonder from the reader.

    The story follows a German professor and his nephew, who, after translating an old Icelandic text, set out on an expedition to find a crater in Iceland that might lead to the centre of the planet.
    `,
    price:50,
    cover:"https://m.media-amazon.com/images/I/911A8d8aCYL._AC_UF1000,1000_QL80_.jpg",
    photos: []
  },
  {
    id:12,
    title:"The Stand",
    author:"Stephen King",
    published_year:"1978",
    description:
    `
    The Stand is a post-apocalyptic dark fantasy novel written by American author Stephen King
    Horror, fantasy, and science fiction converge in The Stand, a master storyteller’s doorstopper about the eternal struggle between good and evil. 
    After a bioengineered influenza virus escapes from a government laboratory, mankind succumbs to the deadly pandemic in just weeks, leaving survivors scattered across the barren United States. 
    Two communities coalesce around very different leaders: Mother Abagail, a benevolent holy woman seeking utopia, and Randall Flagg, the human personification of violence and chaos. As the communities fight to wipe one another out, King weaves an epic tale about theology, morality, and human nature. In the wake of our own pandemic, The Stand has only grown in resonance and prescience.
    `,
    price:50,
    cover:"https://upload.wikimedia.org/wikipedia/commons/5/52/The_Stand_%281978%29_front_cover%2C_first_edition.png",
    photos: []
  },
  {
    id:13,
    title:"A Game of Thrones",
    author:"George R. R. Martin",
    published_year:"1996",
    description:
    `
    A Game of Thrones is the first of seven planned novels in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin.
    `,
    price:50,
    cover:"",
    photos: []
  },
  {
    id:14,
    title:"The Fifth Season",
    author:"N. K. Jemisin",
    published_year:"2015",
    description:
    `
    The Fifth Season is a 2015 science fantasy novel by N. K. Jemisin. It was awarded the Hugo Award for Best Novel in 2016.
    `,
    price:50,
    cover:"https://upload.wikimedia.org/wikipedia/en/0/01/The_Fifth_Season_%28novel%29.jpg",
    photos: []
  },
]

