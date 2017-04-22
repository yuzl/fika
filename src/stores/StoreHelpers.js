// Generiert eine Id für die gemeinsamen Ausgaben
// TODO Langfristig ins Backend auslagern
const getExpensesId = (user1, user2) => {
  return 'exp_' + (user1<user2 ? user1+'_'+user2 : user2+'_'+user1)
}

const h = {
  getExpensesId,
}

export { h }
