import sportsToolsBackground from '@/assets/backgrounds/sports-tools.png';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
const AuthLayout = () => {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-linear-150 from-[#452655] to-[#371548] overflow-hidden">
        <img src={sportsToolsBackground} alt="sports equpment background" className='absolute inset-0 bg-cover bg-center bg-no-repeat' />
        <Card className='p-10 gap-8 w-[400px]'>
          <CardHeader><CardTitle className='font-'>Sign in to Bookysta</CardTitle></CardHeader>
          <Checkbox/>
          <Button variant='secondary' className='bg-[#452655] w-full h-[52px]' >Send OTP</Button>
        </Card>
      </main>
    </>
  )
}

export default AuthLayout