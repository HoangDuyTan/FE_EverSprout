import apiClient from "../api/apiClient";

export interface Contact {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export async function createContact(contact: Contact) {
    const res = await apiClient.post("/contacts", contact);
    return res.data;
}