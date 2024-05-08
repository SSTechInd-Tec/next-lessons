import { Button, Avatar,  } from "@mantine/core";
import Image from "next/image";

export default function UsersProfile({params}) {
    return (
        <div>
            <h1>Welcome {params.username}</h1>
            <Button loading loaderProps={{ type: 'dots' }} color="red">Click</Button>
            <Avatar size={200}  />
            <Image src="/profile/pic.png" width={700} height={200} />
        </div>
    )
}
