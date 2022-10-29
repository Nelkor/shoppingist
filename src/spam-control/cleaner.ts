import { usersData } from './store'
import { PERIOD_TO_DELETE, CLEANER_INTERVAL } from './constants'

const clearInactiveUsers = () => {
  const now = Date.now()

  usersData.forEach((user, id) => {
    if (now - user.lastMessageTime > PERIOD_TO_DELETE) {
      usersData.delete(id)
    }
  })
}

export const startSpamControlCleaner = () => {
  setInterval(clearInactiveUsers, CLEANER_INTERVAL)
}
