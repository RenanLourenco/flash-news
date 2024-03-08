import { delayResponse } from "../lib/mock";
import { CryptoItem, CryptoResponse } from "../types/crypto-types";

export class CryptoApi {
    static async fetchBitcoin(): Promise<CryptoItem> {
        const cryptoResp: CryptoResponse = await (
            await fetch(`${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/assets/bitcoin`)
        ).json()

        return delayResponse(cryptoResp.data,4000)
    }
}