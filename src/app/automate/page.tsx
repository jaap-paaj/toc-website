import type { Metadata } from 'next';
import { AutomatePage } from "../_components/automate/AutomatePage";

export const metadata: Metadata = {
    title: 'Automate | The Only Constant',
};

export default function Page() {
    return <AutomatePage />;
}
