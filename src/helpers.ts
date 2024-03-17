import { Bytes } from "@graphprotocol/graph-ts";
import { Ownership } from "../generated/schema";

export function createOrLoadOwner(id: string): Ownership {
  let holder = Ownership.load(id);
  if (holder == null) {
    holder = new Ownership(id);
  }

  return holder as Ownership;
}
