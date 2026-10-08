/**
 * The public contact address, shown on the contact page and in the home footer.
 * Kept here so both render the same thing — changing the address is a one-line edit.
 */
export const CONTACT_EMAIL = 'bolajidaniels.ilori@gmail.com'

export type Social = {
  /** Accessible name — these links are icon-only, so this is the only label a screen reader gets. */
  label: string
  href: string
  icon: 'github' | 'linkedin'
}

/**
 * Single source of truth for the profile links, used by the home footer and the
 * contact page. Any entry left with an empty `href` is dropped rather than
 * rendered as a dead link — fill one in and it appears in both places.
 */
export function useSocials(): Social[] {
  const all: Social[] = [
    { label: 'GitHub', href: 'https://github.com/Bolaji-i', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/bolaji-daniels-ilori', icon: 'linkedin' }
  ]
  return all.filter(s => s.href !== '')
}
