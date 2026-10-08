export type Hobby = {
  /** Used as the card's terminal-style path label, e.g. ~/chess */
  slug: string
  name: string
  tags: string[]
  desc: string
  /** Key into the icon set in pages/hobbies.vue */
  icon: 'chess' | 'cycling' | 'aviation' | 'space' | 'hiking' | 'traveling'
}

export function useHobbies(): Hobby[] {
  return [
    {
      slug: 'chess',
      name: 'Chess',
      tags: ['rapid', 'endgames'],
      desc: 'Mostly rapid games online, and the occasional slow one over a real board. Good practice at looking a few moves further ahead than feels comfortable.',
      icon: 'chess'
    },
    {
      slug: 'cycling',
      name: 'Cycling',
      tags: ['road', 'commute'],
      desc: 'Longer road rides at the weekend, and the daily commute the rest of the time. The clearest thinking usually shows up somewhere in the second hour.',
      icon: 'cycling'
    },
    {
      slug: 'aviation',
      name: 'Aviation',
      tags: ['atc', 'airframes'],
      desc: 'The wider world around the cockpit — airframe design, ATC procedure, and how a schedule holds up against weather. Accident reports have taught me more about failure modes than most engineering writing.',
      icon: 'aviation'
    },
    {
      slug: 'space',
      name: 'Space',
      tags: ['launches', 'orbital mechanics'],
      desc: 'Launch windows, orbital mechanics, and the part of a mission that starts once the rocket is out of frame. Most of what makes it work is redundancy planned years before anyone counts down.',
      icon: 'space'
    },
    {
      slug: 'hiking',
      name: 'Hiking',
      tags: ['alps', 'day-hikes'],
      desc: 'Day hikes in the mountains south of Munich, ideally starting early enough to be heading back down before the afternoon weather turns.',
      icon: 'hiking'
    },
    {
      slug: 'traveling',
      name: 'Traveling',
      tags: ['slow travel', 'trains'],
      desc: 'Trains over planes wherever the map allows, and enough time in one place to get past the checklist of sights and into the ordinary parts.',
      icon: 'traveling'
    }
  ]
}
