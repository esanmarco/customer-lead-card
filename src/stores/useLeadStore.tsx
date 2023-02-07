import { create } from "zustand";

interface LeadStore {
  name: string;
  companyName: string;
  email: string;
  phone: string;
}

export const defaultState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
};

export const useLeadStore = create<LeadStore>(() => defaultState);
