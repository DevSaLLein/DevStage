import { ArrowRight, Copy, Mail } from "lucide-react";

import { Button } from "@/components/button";
import { InputIcon, InputRoot } from "@/components/input";
import { IconButton } from './../components/icon-button';
import { InputField } from './../components/input';

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
            
            <InputRoot>

                <InputField/>
                
                <InputIcon> <Mail /> </InputIcon>

            </InputRoot>

        </main>
    );
}
