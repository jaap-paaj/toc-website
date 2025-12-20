import type { Metadata } from 'next';
import { EducatePage } from "../_components/educate/EducatePage";

export const metadata: Metadata = {
    title: 'Educate | The Only Constant',
};

export default function Page() {
    return <EducatePage />;
}
