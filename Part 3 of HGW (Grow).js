/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";

  const moneyThresh = ns.getServerMaxMoney(target);

  if (ns.getServerMoneyAvailable(target) < moneyThresh) {
   await ns.grow(target) }
   }
 }
}
