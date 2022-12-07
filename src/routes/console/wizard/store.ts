import { writable } from 'svelte/store';

export type SupportData = {
    name: string;
    email: string;
    message: string;
    file?: File | null;
};

export const supportData = writable<SupportData>({
    name: '',
    email: '',
    message: '',
    file: null
});
