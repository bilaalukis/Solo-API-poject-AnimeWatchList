
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animes').del()
    .then(function () {
      // Inserts seed entries
      return knex('animes').insert([
        { id: 1, 
          anime_name: 'Shingeki no Kyojin Final Season',
          description: "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.Having finally reached the Yeager family basement and learned about the dark history surrounding the titans, the Survey Corps have at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.In Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues their own agenda in the long-awaited conclusion to Paradis’ fight for freedom." ,
          duration: 23,
          status: 'airing',
          image_url: 'https://i.ibb.co/7rrLwMG/aot.jpg',
          user_id: 1
        },
        { id: 2, 
          anime_name: 'Jujutsu Kaisen',
          description: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the 'King of Curses.' Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer." ,
          duration: 23,
          status: 'airing',
          image_url: 'https://i.ibb.co/6gZDYtK/jujutsuK.jpg',
          user_id: 1
        },
        { id: 3, 
          anime_name: 'Yakusoku no Neverland',
          description: "Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their 'Mama', Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage—a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family... never to be heard from again. However, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.",
          duration: 22,
          status: 'completed',
          image_url: 'https://i.ibb.co/3BK9gqQ/neverland.jpg',
          user_id: 2
        },
        { id: 4, 
          anime_name: 'That Time I Got Reincarnated as a Slime',
          description: "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of. When Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities. He then stumbles upon the sealed Catastrophe-level monster 'Storm Dragon' Veldora who had been sealed away for the past 300 years for devastating a town to ashes. Sympathetic to his predicament, Satoru befriends him, promising to assist in destroying the seal. In return, Veldora bestows upon him the name Rimuru Tempest to grant him divine protection. Now, liberated from the mundanities of his past life, Rimuru embarks on a fresh journey with a distinct goal in mind. As he grows accustomed to his new physique, his gooey antics ripple throughout the world, gradually altering his fate." ,
          duration: 23,
          status: 'completed',
          image_url: 'https://i.ibb.co/c10M34Y/slime.jpg',
          user_id: 2
        },
        { id: 5, 
          anime_name: 'Cells at Work! CODE BLACK!',
          description: "Due to poor lifestyle choices, a certain human's body is in constant turmoil. With germs, bacteria, and foreign substances abound, the jobs of various cells become increasingly difficult and dangerous. As some of the unfortunate ones who matured in this chaotic environment, Sekkekkyuu AA2153 and Hakkekkyuu U-1196 strive to fulfill their duties—even if it means seeing many of their fellow cells lose their lives in duty.Set in an environment vastly different from its parent story, Hataraku Saibou Black portrays the cells' struggles as they try to maintain the body's health. However, the human's condition continues to deteriorate, and whether or not these efforts will amount to something concrete depends on the cells!" ,
          duration: 23,
          status: 'airing',
          image_url: 'https://i.ibb.co/2jxmrnN/cells.jpg',
          user_id: 3
        },
        { id: 6, 
          anime_name: 'Vinland Saga',
          description: "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, 'You have no enemies, nobody does. There is nobody who it's okay to hurt,' as he grew, Thorfinn knew that nothing was further from the truth. The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on." ,
          duration: 24,
          status: 'completed',
          image_url: 'https://i.ibb.co/qB4978S/vinland.jpg',
          user_id: 3
        }
      ]);
    });
};
