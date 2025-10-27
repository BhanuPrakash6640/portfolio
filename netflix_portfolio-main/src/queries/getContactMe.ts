// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMeData } from '../data/contactMe';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
