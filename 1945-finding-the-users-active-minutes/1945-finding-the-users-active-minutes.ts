function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  let obj: {[key: number]: Set<number>} = {}
  let res = new Array(k).fill(0)

  for (let log of logs){
    let username = log[0]
    let activeMin = log[1]

    if(!obj[username]) obj[username] = new Set
    obj[username].add(activeMin);
  }

  for (let username in obj){
    let activeCount = obj[username].size
    res[activeCount -1]++
  }

  return res
};