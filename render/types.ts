import type { MageContext as MageAppContext } from "@mage/app";

export type PublicOf<T> = { [K in keyof T]: T[K] };

export type MageContext = PublicOf<MageAppContext>;
