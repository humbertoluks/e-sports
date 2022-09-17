
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';

import { CreateAtBanner } from './components/CreateAtBanner';
import { CreateAtModal } from './components/CreateAtModal';
import { GameBanner } from './components/GameBanner';

import './scripts/main.css';
import logoImg from './assets/Logo.svg';

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(
      response => setGames(response.data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto items-center flex flex-col">
      <img src={logoImg} alt="" className="my-20" />

      <h1 className="text-6xl text-white font-black">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>
      <Dialog.Root>

        <CreateAtBanner />
        <CreateAtModal />

      </Dialog.Root>
    </div>
  );
}

export default App;
