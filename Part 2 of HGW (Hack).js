/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";

  const moneyThresh = ns.getServerMaxMoney(target);

  while (true) {
    if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      await ns.sleep(1000);
    } else {
      await ns.hack(target);

    }
  }
}
