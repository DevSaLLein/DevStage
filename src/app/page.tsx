import { ArrowRight, Copy } from "lucide-react";

import { Button } from "@/components/button";
import { IconButton } from './../components/icon-button';

export default function Home() {
    return (
        <main>
            <div>Hello world!</div>
            
            <Button>
                Click me
                <ArrowRight size={24} />
            </Button>

            <IconButton>
                <Copy size={24} />
            </IconButton>
            
        </main>
    );
}
