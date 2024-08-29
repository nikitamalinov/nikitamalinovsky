// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const endPointsToCheck = [
    "https://www.nikitamalinovsky.com/",
    "https://www.razvedchik.org/",
    "https://www.paulgrahamessays.com/",
  ];

  let endpointsObject: any = {};
  let allHealthy = true;

  for (const endPoint of endPointsToCheck) {
    try {
      if ((await fetch(endPoint)).status !== 200) {
        allHealthy = false;
        endpointsObject[endPoint] = false;
      }
      endpointsObject[endPoint] = true;
    } catch (e) {
      allHealthy = false;
      endpointsObject[endPoint] = false;
    }
  }

  if (allHealthy) {
    res.status(500).json({ status: "Healthy", data: endpointsObject });
  } else {
    res.status(200).json({ status: "Unhealthy", data: endpointsObject });
  }
}
