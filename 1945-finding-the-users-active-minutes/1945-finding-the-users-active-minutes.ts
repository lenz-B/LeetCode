function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  let obj: {[key: number]: number[]} = {}

  for (let log of logs){
    let username = log[0]
    let activeMin = log[1]

    if(!obj[username]) obj[username] = []
    if (obj[username] && !obj[username].includes(activeMin)) obj[username].push(activeMin)
  }

  console.log(obj)
  let lengths = Object.values(obj).map(arr => arr.length)
  console.log(lengths)

  let res = new Array(k).fill(0)
  for(let i = 0; i < lengths.length; i++){
    res[lengths[i] -1]++
  }
  return res
};