/** @param {NS} ns */
export async function main(ns) {
// list of all my bought servers, yes I know it.s not pretty <3
    const servers0Port = ["pserv-0",
                        "pserv-1",
                        "pserv-2",
                        "pserv-3",
                        "pserv-4",
                        "pserv-4",
                        "pserv-5",
                        "pserv-5",
                        "pserv-6",
                        "pserv-7",
                        "pserv-8",
                        "pserv-9",
                        "pserv-10",
                        "pserv-11",
                        "pserv-12",
                        "pserv-13",
                        "pserv-14",
                        "pserv-15",
                        "pserv-16",
                        "pserv-17",
                        "pserv-18",
                        "pserv-19",
                        "pserv-20",
                        "pserv-21",
                        "pserv-22",
                        "pserv-23",
                        "pserv-24"];
    // Copy the basic script onto each server that requires 0 ports because it easier
    // run the scripts thice to ensure it runs and for a lil money
    for (let i = 0; i < servers0Port.length; ++i) {
        const serv = servers0Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.exec("early-hack-template.js", serv, 3)
    }
}
