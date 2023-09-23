import { IContent } from '../interfaces/common';

const nextJsFileJsContent: IContent[] = [
  {
    fileName: '.eslintrc.json',
    filePath: '.eslintrc.json',
    content: '{\n  "extends": "next/core-web-vitals"\n}\n',
  },
  {
    fileName: '.gitignore',
    filePath: '.gitignore',
    content:
      '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env*.local\n\n# vercel\n.vercel\n\n# typescript\n*.tsbuildinfo\nnext-env.d.ts\n',
  },
  {
    fileName: 'jsconfig.json',
    filePath: 'jsconfig.json',
    content:
      '{\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}\n',
  },
  {
    fileName: 'next.config.js',
    filePath: 'next.config.js',
    content:
      "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n}\n\nmodule.exports = nextConfig\n",
  },
  {
    fileName: 'package.json',
    filePath: 'package.json',
    content:
      '{\n  "name": "demo",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n    "lint": "next lint"\n  },\n  "dependencies": {\n    "eslint": "8.50.0",\n    "eslint-config-next": "13.5.2",\n    "next": "13.5.2",\n    "react": "18.2.0",\n    "react-dom": "18.2.0"\n  }\n}\n',
  },
  {
    fileName: 'favicon.ico',
    filePath: 'public\\favicon.ico',
    content:
      '\u0000\u0000\u0001\u0000\u0004\u0000\u0010\u0010\u0000\u0000\u0001\u0000 \u0000ï¿½\u0001\u0000\u0000F\u0000\u0000\u0000\u0018\u0018\u0000\u0000\u0001\u0000 \u0000\f\u0003\u0000\u0000)\u0002\u0000\u0000  \u0000\u0000\u0001\u0000 \u00009\u0003\u0000\u00005\u0005\u0000\u0000@@\u0000\u0000\u0001\u0000 \u0000ï¿½\u0006\u0000\u0000n\b\u0000\u0000ï¿½PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0010\b\u0003\u0000\u0000\u0000(-\u000fS\u0000\u0000\u0000ï¿½PLTE""""""""""""""""""2PX=rï¿½)7;*:>Hï¿½ï¿½-BGEï¿½ï¿½8do5Xb6[eKï¿½ï¿½Kï¿½ï¿½1MU9gs3S\\Iï¿½ï¿½:gt\'03@{ï¿½Vï¿½ï¿½Tï¿½ï¿½A}ï¿½Vï¿½ï¿½@yï¿½6\\fHï¿½ï¿½-CIIï¿½ï¿½Eï¿½ï¿½+;@7_i7_jFï¿½ï¿½Jï¿½ï¿½Kï¿½ï¿½Hï¿½ï¿½-BHaï¿½ï¿½,@FCï¿½ï¿½Lï¿½ï¿½&.0Wï¿½ï¿½Nï¿½ï¿½Iï¿½ï¿½$)+Bï¿½ï¿½Jï¿½ï¿½Rï¿½ï¿½?vï¿½>sï¿½>uï¿½Sï¿½ï¿½=qPï¿½ï¿½Pï¿½ï¿½Pï¿½ï¿½,?D4U^%+-Mï¿½ï¿½Kï¿½ï¿½%+,2OX+<ALï¿½ï¿½#&&Dï¿½ï¿½%,.Iï¿½ï¿½vï¿½Tï¿½\u0000\u0000\u0000\u0005tRNSIï¿½ï¿½Jï¿½eï¿½eï¿½\u0000\u0000\u0000ï¿½IDATx\u0001Mï¿½ï¿½ZEA\fï¿½ï¿½Ù³\tï¿½ï¿½%Rï¿½ï¿½ï¿½ï¿½TThï¿½Gï¿½ï¿½,ï¿½ï¿½ï¿½=\u0003ï¿½\u0016ï¿½ï¿½mï¿½fï¿½mnfï¿½Aï¿½$ï¿½>!\u0003ï¿½gï¿½ï¿½Hgï¿½ï¿½EßÜµ}\u0002\t\u0006Ý»ï¿½ï¿½ï¿½ï¿½k\u0010d\u0013ï¿½ï¿½ï¿½Jo\u0011ï¿½ï¿½ï¿½3ï¿½L"Jï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Qï¿½$ï¿½ï¿½Ä¼\u001fffï¿½,ï¿½5i9\u0002\u0019Ìï¿½Hï¿½\u001c/mB\u0002ï¿½ï¿½wï¿½ï¿½w;D\rï¿½+&ï¿½Wï¿½\u0015ï¿½ï¿½ï¿½Dï¿½o\u0014@Ê´RIï¿½ï¿½Bï¿½om\u001a.\u0007Û³\u0007ï¿½\u0000\u0000\u0000\u0000IENDï¿½B`ï¿½ï¿½PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u0018\b\u0003\u0000\u0000\u0000×©ï¿½ï¿½\u0000\u0000\u0001ePLTE""""""""""""""""""""""""2RZNï¿½ï¿½Jï¿½ï¿½3R[Jï¿½ï¿½)59Yï¿½ï¿½0KS4W`Qï¿½ï¿½Lï¿½ï¿½%+-0JR)6::gtCï¿½ï¿½"##?vï¿½Uï¿½ï¿½?wï¿½<n{&-/Yï¿½ï¿½=q:iuBï¿½A}ï¿½A{ï¿½Bï¿½ï¿½/IPPï¿½ï¿½=qï¿½Kï¿½ï¿½_ï¿½ï¿½Lï¿½ï¿½$();lzRï¿½ï¿½aï¿½ï¿½Iï¿½ï¿½Zï¿½ï¿½3U^1MU3T]Zï¿½ï¿½Iï¿½ï¿½Xï¿½ï¿½Fï¿½ï¿½-BGPï¿½ï¿½6[e,@E5ZdOï¿½ï¿½-BHXï¿½ï¿½+=AWï¿½ï¿½,@FWï¿½ï¿½Qï¿½ï¿½?vï¿½Wï¿½ï¿½+<A@yï¿½"#$\\ï¿½ï¿½4Wa\\ï¿½ï¿½Sï¿½ï¿½$(*.EL^ï¿½ï¿½Vï¿½ï¿½6]h#$%Gï¿½ï¿½#&\';jwVï¿½ï¿½-CILï¿½ï¿½Zï¿½ï¿½^ï¿½ï¿½>uï¿½Sï¿½ï¿½/HNMï¿½ï¿½_ï¿½ï¿½\\ï¿½ï¿½Mï¿½ï¿½8doDï¿½ï¿½Dï¿½ï¿½>tï¿½+=B[ï¿½ï¿½,>C>tï¿½<o}@yï¿½0LS.EKTï¿½ï¿½$\'(%,.A~ï¿½Wï¿½ï¿½Cï¿½ï¿½%+,\\ï¿½ï¿½C!ï¿½\u001d\u0000\u0000\u0000\u0007tRNS\u0006ï¿½ï¿½îï¿½ï¿½Gï¿½ï¿½\u0000\u0000\u0001OIDATx\u0001lï¿½ï¿½Bï¿½Q\u0014ï¿½ï¿½uï¿½ï¿½_È³<ï¿½\u0016ï¿½ï¿½v\u001ceï¿½ï¿½\u0006ï¿½ï¿½ï¿½a\u00166\u0016AÎ¾ï¿½\u0017\u0004ï¿½vï¿½{\u0007@ï¿½\u0007\u0000E\'\u0000ï¿½d\u0000Iï¿½!ï¿½\u001cï¿½ï¿½\u001a \u0000ï¿½Cï¿½ï¿½Tï¿½\u000bï¿½g\u0000\u001c\u00001ï¿½E(ï¿½\u0005\u0014ï¿½SQs\u001aï¿½i\rÄï¿½Zï¿½ï¿½\u0016V\u0006ï¿½\u000b\u0000\u0002ï¿½)ï¿½g!ï¿½ï¿½hï¿½ï¿½\u0010\u0002t\u0005ï¿½-i}ï¿½ï¿½\u0011ï¿½<ï¿½?\u0015ï¿½ï¿½lBZaÄ´4{Dï¿½â»_e8ï¿½yÇï¿½ï¿½\u001f3ï¿½)ï¿½ï¿½?ï¿½f;8.ï¿½\u001cï¿½tï¿½=ï¿½;\u000e\t:ï¿½52fKZï¿½l\u0012ï¿½ï¿½Øï¿½9.ï¿½#ï¿½ï¿½\u0002Aï¿½qï¿½ï¿½ï¿½\u0016\u0006\u001fï¿½ï¿½Vï¿½ï¿½`=\u0003\u0003$ï¿½ï¿½?_ï¿½ï¿½ï¿½\u0005ï¿½qMï¿½.ï¿½J$\u000f\n?^qï¿½ï¿½ï¿½Ûï¿½.},ï¿½ï¿½sï¿½ï¿½\f\f_TttÔ¾\u0000\u00151#\u0007ï¿½/(ï¿½-[\u0006\u0012ï¿½ï¿½`ï¿½ï¿½`ï¿½\u0004ï¿½ï¿½ï¿½ï¿½Z\u001fd5ï¿½ï¿½ï¿½ï¿½?ï¿½ebZï¿½Þi.ï¿½ï¿½\f\u0010\u0019ï¿½qÎ+1ï¿½\u0001}Â5ï¿½\u0000\u0000ï¿½ï¿½dï¿½Gï¿½ï¿½ï¿½\u0000\u0000\u0000\u0000IENDï¿½B`ï¿½ï¿½PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000 \u0000\u0000\u0000 \b\u0003\u0000\u0000\u0000Dï¿½ï¿½ï¿½\u0000\u0000\u0001APLTE\u0000\u0000\u0000"""""""""""""""""""""""""""2RZVï¿½ï¿½_ï¿½ï¿½Uï¿½ï¿½=rï¿½$()\'25]ï¿½ï¿½Cï¿½ï¿½0LS<o}Xï¿½ï¿½Xï¿½ï¿½0JQ=p~Dï¿½ï¿½<n{Vï¿½ï¿½Eï¿½ï¿½8do_ï¿½ï¿½Eï¿½ï¿½Fï¿½ï¿½Hï¿½ï¿½9dp_ï¿½ï¿½Hï¿½ï¿½Iï¿½ï¿½Fï¿½ï¿½6[e`ï¿½ï¿½`ï¿½ï¿½Lï¿½ï¿½/GM_ï¿½ï¿½Uï¿½ï¿½\'02Pï¿½ï¿½/IPPï¿½ï¿½Xï¿½ï¿½&/1;ly3R[`ï¿½ï¿½Gï¿½ï¿½Tï¿½ï¿½\\ï¿½ï¿½aï¿½ï¿½1OW"##Qï¿½ï¿½aï¿½ï¿½Rï¿½ï¿½=qï¿½`ï¿½ï¿½.EL+=ATï¿½ï¿½-CIKï¿½ï¿½#&\'Cï¿½ï¿½^ï¿½ï¿½Iï¿½ï¿½&.04U^^ï¿½ï¿½@yï¿½Zï¿½ï¿½$(*[ï¿½ï¿½^ï¿½ï¿½,?DRï¿½ï¿½"#$1NV1MTDï¿½ï¿½>uï¿½;kxGï¿½ï¿½Rï¿½ï¿½/HN&-/@yï¿½>sï¿½>tï¿½@zï¿½]ï¿½ï¿½Pï¿½ï¿½$\'(Dï¿½ï¿½]ï¿½ï¿½<n|0JRUï¿½ï¿½\u000eï¿½\\ï¿½\u0000\u0000\u0000\ttRNS\u0000%ï¿½ï¿½\'ï¿½ï¿½(ï¿½~ï¿½ï¿½ï¿½\u0000\u0000\u0001ï¿½IDATx\u0001ï¿½ï¿½\u0003ï¿½C1\u0014F_Ý¿MmÛ¶4ï¿½m{ï¿½\u000bï¿½ï¿½nï¿½ï¿½ï¿½ï¿½\tï¿½\u0004A$ï¿½ï¿½\u0007$bï¿½ Heï¿½\u0005ï¿½T\u0010ï¿½Wï¿½ï¿½hï¿½ï¿½hï¿½:PtZ\rQï¿½0@.`ï¿½ï¿½`4ï¿½-V\u001b`ï¿½Zï¿½&ï¿½Aï¿½\u0001#ï¿½ï¿½bkï¿½ï¿½ï¿½ï¿½ï¿½ï¿½>.\'\'ï¿½\u0003`\u0004C$\bFï¿½ï¿½\tï¿½(\u0018ï¿½x"6X\u0010ï¿½\u0004c\u0012ï¿½Tï¿½ï¿½Lï¿½@I\u001aï¿½;d\u0000d-ï¿½|ï¿½P,\u0001È9ï¿½Rï¿½ï¿½\u001bï¿½f3\u0014ï¿½ï¿½Fï¿½VmM\u000bï¿½Xï¿½ï¿½ï¿½ï¿½\u0019ï¿½\u0017@Yï¿½7ï¿½ï¿½ï¿½ï¿½Nï¿½=\u0012\u0016ï¿½\fï¿½ï¿½ï¿½Êªu\r}Ö¬ï¿½+ï¿½eï¿½aiq ï¿½ï¿½76ï¿½ï¿½ï¿½ï¿½=h\rï¿½Zï¿½ï¿½ï¿½\u001cl\u0001ï¿½\u001bï¿½}ï¿½\u0006Ê±ï¿½[Fï¿½I9Aï¿½k9\u0006ï¿½ï¿½ï¿½\u000bï¿½\u0014ï¿½3ï¿½ï¿½9\u0013Î¡ï¿½qB~ï¿½ï¿½bï¿½ï¿½ï¿½U_ï¿½^ï¿½ï¿½\u0000[\u0007ï¿½ï¿½\u000ewï¿½ï¿½{zï¿½\u0007vï¿½\u001bzï¿½ï¿½(ï¿½ï¿½(ï¿½ï¿½(ï¿½ï¿½\u0007ï¿½ï¿½fï¿½qï¿½ï¿½Gï¿½ï¿½ï¿½kï¿½ï¿½ï¿½Yï¿½\u0016ï¿½ï¿½fï¿½ï¿½ï¿½~ï¿½:*4ï¿½Q\\O>ï¿½ï¿½ï¿½ï¿½ï¿½<×ï¿½Wï¿½ï¿½ï¿½Z|\u0007Þï¿½7ï¿½ï¿½ï¿½jTï¿½ï¿½ï¿½n\u000fï¿½ï¿½ï¿½\u000fï¿½ï¿½`$Hï¿½+ï¿½GOï¿½ï¿½ï¿½*ï¿½xï¿½ï¿½ï¿½\u0001ï¿½X*|\u0002ï¿½\u0018^ï¿½\u0005\u000fd\u000f\u0000\u0000\u0000\u0000IENDï¿½B`ï¿½ï¿½PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000@\u0000\u0000\u0000@\b\u0003\u0000\u0000\u0000ï¿½ï¿½ï¿½ï¿½\u0000\u0000\u0002:PLTE\u0000\u0000\u0000"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""%+-@yï¿½Wï¿½ï¿½`ï¿½ï¿½^ï¿½ï¿½Sï¿½ï¿½Cï¿½ï¿½,>C*8<Xï¿½ï¿½aï¿½ï¿½aï¿½ï¿½Mï¿½ï¿½+<Aaï¿½ï¿½Xï¿½ï¿½#%%Tï¿½ï¿½Lï¿½ï¿½=q>uï¿½Kï¿½ï¿½`ï¿½ï¿½A}ï¿½Lï¿½ï¿½8do=rï¿½%+,@yï¿½^ï¿½ï¿½Sï¿½ï¿½)59=qï¿½Pï¿½ï¿½Uï¿½ï¿½"#$Pï¿½ï¿½\\ï¿½ï¿½0JQQï¿½ï¿½"##Uï¿½ï¿½#&&_ï¿½ï¿½>tï¿½>sï¿½`ï¿½ï¿½_ï¿½ï¿½5Yc1OW5Zd1NV+=B1MU+;@/GM\\ï¿½ï¿½*;?3S\\)8<2RZ_ï¿½ï¿½+=A]ï¿½ï¿½,@F,@E&-/0KS7alOï¿½ï¿½9dp8amB~ï¿½Eï¿½ï¿½Pï¿½ï¿½Nï¿½ï¿½\'023T]]ï¿½ï¿½?xï¿½3U^Cï¿½ï¿½6\\gUï¿½ï¿½&.0Dï¿½ï¿½7_iRï¿½ï¿½Hï¿½ï¿½Iï¿½ï¿½Mï¿½ï¿½$(*?vï¿½Zï¿½ï¿½Xï¿½ï¿½-AG#$%[ï¿½ï¿½8co[ï¿½ï¿½Wï¿½ï¿½Cï¿½ï¿½\'25?vï¿½8bn%*+Lï¿½ï¿½Nï¿½ï¿½2PX)7;=p~(58^ï¿½ï¿½Pï¿½ï¿½4WaQï¿½ï¿½Tï¿½ï¿½0JRQï¿½ï¿½Tï¿½ï¿½Iï¿½ï¿½6]hRï¿½ï¿½Tï¿½ï¿½0LSFï¿½ï¿½9eqEï¿½ï¿½Eï¿½ï¿½9gsFï¿½ï¿½Cï¿½ï¿½#&\'\\ï¿½ï¿½`ï¿½ï¿½&/16\\fBï¿½ï¿½A{ï¿½Rï¿½ï¿½]ï¿½ï¿½(47%,.*:>*9=9fr:gt7^iUï¿½ï¿½?wï¿½Zï¿½ï¿½Xï¿½ï¿½^ï¿½ï¿½Qï¿½ï¿½Hï¿½ï¿½)6:Vï¿½ï¿½\'034U^Eï¿½ï¿½.EL.FMKï¿½ï¿½@zï¿½Sï¿½\u001c\u000e\u0000\u0000\u0000\u0019tRNS\u0000*ï¿½ï¿½ï¿½ï¿½\u0006ï¿½ï¿½ï¿½\tï¿½ï¿½ï¿½+ï¿½ï¿½ï¿½ï¿½Ô,ï¿½ï¿½ï¿½ï¿½=Vï¿½\u0000\u0000\u0004\fIDATx\u0001ï¿½Ëµ\u0001C!\u0000\u0004ï¿½ïï¿½C|ï¿½\u0005ï¿½ï¿½\u0005^yR]ï¿½Mï¿½ï¿½O]ï¿½ï¿½ï¿½ï¿½0Nï¿½2ï¿½ï¿½ï¿½ï¿½"\u001b\u0019ï¿½ï¿½ï¿½(0V\u0015ï¿½(ï¿½Y%PDT-~(mï¿½ï¿½!ï¿½K\fï¿½Yï¿½\u0015~ï¿½ï¿½ï¿½Iï¿½f{ï¿½ï¿½\u001fï¿½ï¿½aï¿½ï¿½ï¿½ï¿½3ï¿½ï¿½Op&ï¿½\u001cÐ¤ï¿½ï¿½\u0000xï¿½ï¿½#ï¿½jï¿½ï¿½Ú¶mï¿½mï¿½ï¿½c)]mï¿½ï¿½ï¿½ï¿½)Æ§gfï¿½\u0014hkï¿½ï¿½ï¿½Ò ï¿½ggï¿½Çï¿½ï¿½\u0019ï¿½+Xï¿½ï¿½ï¿½uiy\u0005V×ªï¿½kï¿½ï¿½ï¿½\\[ï¿½:,ï¿½\b6ï¿½ï¿½jÄ²\r;ï¿½"ï¿½;ï¿½ï¿½Xï¿½ï¿½\u0001ï¿½fï¿½ï¿½\u0011ï¿½ï¿½ï¿½ï¿½ï¿½Sï¿½ï¿½ï¿½ï¿½8=ï¿½oï¿½;ï¿½ï¿½ï¿½(\u0018ï¿½ï¿½ï¿½Ó¥Bkï¿½eï¿½ï¿½\u0015\\\u001b\u00057p+mï¿½ï¿½ï¿½ï¿½Nï¿½<ï¿½ï¿½Qï¿½\bOï¿½ï¿½ï¿½\u0005ï¿½ï¿½ï¿½yï¿½gï¿½\u0015ttï¿½ï¿½\u001boï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Vï¿½\u0001ï¿½ï¿½ï¿½s\u0002ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½&_ï¿½a\u0014ï¿½ï¿½ï¿½V\u0015~ï¿½ï¿½\u0019?ï¿½*8ï¿½ï¿½Q ;8ï¿½ï¿½,ï¿½ï¿½ï¿½\u000bfï¿½ï¿½ï¿½\u001d1\u000bï¿½xï¿½ï¿½×§ï¿½\u0004*ï¿½ï¿½ï¿½Aï¿½ï¿½ï¿½a#\bï¿½ï¿½\u0016ï¿½ï¿½#ï¿½nPï¿½i+ï¿½ï¿½Cï¿½,ï¿½ï¿½ï¿½ï¿½ï¿½_ï¿½Nbï¿½ï¿½Ã¸ï¿½\u0005\u0000ï¿½Hï¿½B*ï¿½Ò¦ ï¿½L(\u0000^<ï¿½Ãï¿½L6\u0007pJï¿½Pï¿½ï¿½\bï¿½ï¿½ï¿½ï¿½%"ï¿½R,ï¿½9\u0005ï¿½e3eRï¿½a1ï¿½(\nï¿½ï¿½qï¿½8Ùï¿½ï¿½mKË±mÆ¶mï¿½ï¿½ï¿½yi!ï¿½\u000eÎªYï¿½uï¿½ï¿½ï¿½_ï¿½ï¿½?iï¿½ï¿½ï¿½+ï¿½\u000fï¿½ï¿½A\u0011|\u0016ï¿½{ï¿½ï¿½ï¿½?ï¿½ï¿½_En\u0001).\u0001Jï¿½Dï¿½<ï¿½\nï¿½ï¿½ï¿½Z\\Tsï¿½R*\b(\u0017\tï¿½ï¿½\u0005Jï¿½ï¿½\u0002ï¿½u\u0010X/\u001a\r4J\u00139ï¿½ï¿½5ï¿½DEï¿½4kï¿½4ï¿½&iï¿½V4ï¿½\u0002ï¿½ï¿½ï¿½\u0016\bï¿½ï¿½vsf:ï¿½g,ï¿½ï¿½ï¿½BCï¿½ï¿½$ï¿½\bï¿½ï¿½ï¿½îï¿½@\u0011ï¿½I_?\u0003<\u001d\u0014ï¿½!\f^ï¿½ï¿½ï¿½Ó½ï¿½ï¿½ï¿½ï¿½Bï¿½%\u0010Lï¿½wï¿½\u0018\u0006FD1ï¿½ï¿½ï¿½(Fï¿½\u001eï¿½ï¿½\u001eHï¿½%0ï¿½\u0003ï¿½\u0019ï¿½ï¿½Ø(ï¿½0ï¿½\u0012ï¿½ï¿½\u0018\u0017\'ï¿½ï¿½\u0001ï¿½N.0uï¿½@ï¿½Yï¿½P\u0004Wï¿½Iï¿½aNï¿½K\fï¿½\u000fï¿½ï¿½?ï¿½Óµï¿½=ï¿½eï¿½v/cï¿½ï¿½ï¿½ï¿½0c\u00160ï¿½2ï¿½ï¿½:ï¿½06R-uï¿½Ä­\\QÌ¶ï¿½ä´¼ï¿½6R#\rï¿½Fï¿½ï¿½6ï¿½ï¿½rÕï¿½ï¿½uï¿½ï¿½mï¿½ï¿½ï¿½ï¿½ï¿½Iï¿½i~\u0001 ï¿½ï¿½ï¿½ï¿½ÃsPï¿½"ï¿½\u0000\u000bï¿½\reiyï¿½ï¿½Pï¿½ï¿½ï¿½ï¿½ò§¡ï¿½ï¿½ï¿½,S]Uï¿½ï¿½Vï¿½\u001bï¿½Öï¿½ï¿½Zï¿½ï¿½oï¿½ï¿½\u001bï¿½xzï¿½ï¿½ï¿½Snmï¿½{ÚºwaÙï¿½\u001eï¿½Å»ï¿½ï¿½ï¿½(mg/ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½\u0005ï¿½[ï¿½\b\u0018\u0019bï¿½ï¿½\u0017qï¿½ï¿½&Õ¯\u0007ï¿½ï¿½$\u0016ï¿½zÈ\u0017ï¿½\u0004H>aï¿½KT1/ï¿½ï¿½1Oï¿½ï¿½0ï¿½.h\u0007ÍYï¿½Aï¿½ï¿½ï¿½\n-ï¿½>Ûï¿½ï¿½ï¿½XÕ¢ï¿½}ß¨ï¿½\fï¿½ï¿½;\u0007ï¿½ï¿½Nï¿½ï¿½vï¿½ï¿½ï¿½Î¸ï¿½1\u0000ï¿½ï¿½ï¿½ï¿½O@&v/ï¿½ï¿½_ï¿½ï¿½\\ï¿½\u000eï¿½\\ï¿½.\u000fï¿½ï¿½+0ï¿½\u0003;\u001c\u0014\u0001!\u0006fï¿½\f\u0010ï¿½ï¿½ï¿½%ï¿½ JYï¿½Oï¿½Â\'/ï¿½]_ï¿½;ï¿½\u0010ï¿½\'"&Nï¿½n\ta\u0011Qï¿½^\u0000\u0019ï¿½cxï¿½Aï¿½ï¿½\u0000\u0000\u0000\u0000IENDï¿½B`ï¿½',
  },
  {
    fileName: 'README.md',
    filePath: 'README.md',
    content:
      'This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.\n\n[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.\n\nThe `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.\n\nThis project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.\n',
  },
  {
    fileName: 'hello.js',
    filePath: 'src\\pages\\api\\hello.js',
    content:
      "// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nexport default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n",
  },
  {
    fileName: 'index.js',
    filePath: 'src\\pages\\index.js',
    content:
      'export default function Home() {\n  return <div>Hello from index page</div>;\n}\n',
  },
  {
    fileName: '_app.js',
    filePath: 'src\\pages\\_app.js',
    content:
      "import '@/styles/globals.css'\n\nexport default function App({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}\n",
  },
  {
    fileName: '_document.js',
    filePath: 'src\\pages\\_document.js',
    content:
      'import { Html, Head, Main, NextScript } from \'next/document\'\n\nexport default function Document() {\n  return (\n    <Html lang="en">\n      <Head />\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  )\n}\n',
  },
  {
    fileName: 'globals.css',
    filePath: 'src\\styles\\globals.css',
    content: ' ',
  },
  {
    fileName: 'Home.module.css',
    filePath: 'src\\styles\\Home.module.css',
    content: '\n',
  },
];
export default nextJsFileJsContent;
