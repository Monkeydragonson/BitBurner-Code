/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";

  const securityThresh = ns.getServerMinSecurityLevel(target);

  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
 // If the server's security level is above our threshold, weaken it
      await ns.weaken(target);
    }
    else {
      await ns.sleep(1000);
  // Otherwise sleep
    }
  }
}
