var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  let tag = 0
  const loot = []
  for (let list of lists) {
    if (list === null) tag++
    while (list) {
      loot.push(list.val)
      list = list.next
    }
  // 如果链表全为空直接返回Null
  if (tag === lists.length) return null
  loot.sort((a, b) => a-b)
  const res = []
  while (loot.length) {
    const val = loot.shift()
    const list = new ListNode()
    list.val = val
    list.next = null
    res.push(list)
  }
  for (let i = 0; i < res.length; i++) {
    if (i < res.length - 1) {
      res[i].next = res[i + 1]
    }
  }
  return res[0]
};
}