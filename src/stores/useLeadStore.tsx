import { create } from "zustand";

export const useLeadStore = create((set) => ({
  leads: [],

  name: "",
  companyName: "",
  email: "",
  phone: "",
}));
