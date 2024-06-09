/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";

  const moneyThresh = ns.getServerMaxMoney(target);

While(true); {
  if (ns.getServerMoneyAvailable(Target) < moneyThresh) {
   await ns.grow(Target) }
  else { 
    await ns.sleep(1000); 
   }
 }
}
