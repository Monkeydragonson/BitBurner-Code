//Version.01 of my shitty server farm code
/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";


  const moneyThresh = ns.getServerMaxMoney(target);


  const securityThresh = ns.getServerMinSecurityLevel(target);

  ns.nuke(target);


  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {

      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {

      await ns.grow(target);
    } else {

      await ns.hack(target);
    }
  }
}
