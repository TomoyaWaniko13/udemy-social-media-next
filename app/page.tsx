import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={'min-h-screen flex flex-col items-center justify-center '}>
      <Card className={'w-[350px]'}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent className={'flex flex-col gap-2'}>
          <Button>
            <Link href={'/signin'}>Sign In</Link>
          </Button>
          <Button>
            <Link href={'/signup'}>Sign Up</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
