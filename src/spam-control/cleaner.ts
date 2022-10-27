import { users } from './users'
import { PERIOD_TO_DELETE, CLEANER_INTERVAL } from './constants'

const clearInactiveUsers = () => {
  const now = Date.now()

  users.forEach((user, id) => {
    if (now - user.lastMessageTime > PERIOD_TO_DELETE) {
      users.delete(id)
    }
  })
}

export const startSpamControlCleaner = () => {
  setInterval(clearInactiveUsers, CLEANER_INTERVAL)
}
