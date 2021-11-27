var RecentCounter = function() {
  this.team = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.team.push(t);
  while(this.team[0] < t - 3000) {
      this.team.shift();
  } 
  console.log(t)
  return this.team.length;
};

// 常见的队列题   先进先出   同类的题还有任务队列  食堂排队打饭等等