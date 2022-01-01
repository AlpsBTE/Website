import { useSession, signIn, signOut } from 'next-auth/react';
import { Button, Text } from '@nextui-org/react';
import './index.module.scss';
export default function Index() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="page">
      <Text h2>Spike - Alps Content Manager</Text>
      <Button onClick={() => signIn()}>Sign in with Discord</Button>
    </div>
  );
}
