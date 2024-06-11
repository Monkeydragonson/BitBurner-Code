/** @param {NS} ns */
export async function main(ns) {

  const target = "harakiri-sushi";

  const securityThresh = ns.getServerMinSecurityLevel(target);

    if (ns.getServerSecurityLevel(target) > securityThresh) {
 // If the server's security level is above our threshold, weaken it
      await ns.weaken(target);
    }
  }
}
