"use client"
import { CryptoApi } from "@/app/api/crypto-api"
import { CryptoItem } from "@/app/types/crypto-types"
import { useEffect, useState } from "react"

export function CryptoNews(p:{initialData: CryptoItem}){
    const [cryptoData, setCryptoData] = useState<CryptoItem>(p.initialData)

    const fetchBitCoinAndSetCrypto = async () => {
        const fetchCrypto = await CryptoApi.fetchBitcoin()
    
        setCryptoData(fetchCrypto)
    }

    useEffect(() => {
        fetchBitCoinAndSetCrypto()
        

        const interval = setInterval(fetchBitCoinAndSetCrypto, 20000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const getEvolutionEmoji = (value: string) => {
        const v = Number(value);

        switch(v > 0) {
            case true:
                return <span className="text-green-500">↑</span>
            case false:
                return <span className="text-red-500">↓</span>
        }

    }

    return cryptoData && (
            <div>
                <div className="flex items-center space-x-4 mb-16">
                    <h2 className="text-xl font-bold">
                        <span className="animate-pulse">🔴</span> Crypto news
                    </h2>
                </div>
                <div className="w-80 border-2 p-4 rounded-lg">
                    <div className="text-lg font-semibold">
                        {cryptoData.name + " market"}
                    </div>
                    <div className="text-slate-500">
                        Real time {cryptoData.name} evolution
                    </div>
                    <div className="space-y-2 text-sm">
                    {cryptoData.priceUsd.split(".")[0]}$({cryptoData.changePercent24Hr}%)
                    {getEvolutionEmoji(cryptoData.changePercent24Hr)}
                    </div>
                </div>

            </div>
        )
    
}