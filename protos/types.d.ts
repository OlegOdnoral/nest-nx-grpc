// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.
import { Observable } from 'rxjs';

export namespace hero {

    class HeroesService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HeroesService;
        public getAll(request: hero.IHeroesListGet, callback: hero.HeroesService.GetAllCallback): void;
        public getAll(request: hero.IHeroesListGet): Promise<hero.HeroesList>;
        public findOne(request: hero.IHeroById, callback: hero.HeroesService.FindOneCallback): void;
        public findOne(request: hero.IHeroById): Promise<hero.Hero>;
        public getAllStream(request: hero.IHeroesListGet, callback: hero.HeroesService.GetAllStreamCallback): void;
        public getAllStream(request: hero.IHeroesListGet): Promise<hero.HeroesList>;
        public findOneStream(request: hero.IHeroById, callback: hero.HeroesService.FindOneStreamCallback): void;
        public findOneStream(request: hero.IHeroById): Promise<hero.Hero>;
    }

    namespace HeroesService {

        type GetAllCallback = (error: (Error|null), response?: hero.HeroesList) => void;

        type FindOneCallback = (error: (Error|null), response?: hero.Hero) => void;

        type GetAllStreamCallback = (error: (Error|null), response?: hero.HeroesList) => void;

        type FindOneStreamCallback = (error: (Error|null), response?: hero.Hero) => void;
    }

    interface IHeroesList {
        data?: (hero.IHero[]|null);
    }

    class HeroesList implements IHeroesList {
        constructor(properties?: hero.IHeroesList);
        public data: hero.IHero[];
        public static create(properties?: hero.IHeroesList): hero.HeroesList;
        public static encode(message: hero.IHeroesList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.IHeroesList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroesList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroesList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.HeroesList;
        public static toObject(message: hero.HeroesList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IHeroesListGet {
    }

    class HeroesListGet implements IHeroesListGet {
        constructor(properties?: hero.IHeroesListGet);
        public static create(properties?: hero.IHeroesListGet): hero.HeroesListGet;
        public static encode(message: hero.IHeroesListGet, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.IHeroesListGet, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroesListGet;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroesListGet;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.HeroesListGet;
        public static toObject(message: hero.HeroesListGet, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IHeroById {
        id?: (number|null);
    }

    class HeroById implements IHeroById {
        constructor(properties?: hero.IHeroById);
        public id: number;
        public static create(properties?: hero.IHeroById): hero.HeroById;
        public static encode(message: hero.IHeroById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.IHeroById, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.HeroById;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.HeroById;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.HeroById;
        public static toObject(message: hero.HeroById, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IHero {
        id?: (number|null);
        name?: (string|null);
    }

    class Hero implements IHero {
        constructor(properties?: hero.IHero);
        public id: number;
        public name: string;
        public static create(properties?: hero.IHero): hero.Hero;
        public static encode(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.Hero;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.Hero;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): hero.Hero;
        public static toObject(message: hero.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
