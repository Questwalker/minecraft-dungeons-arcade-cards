string = '''
02 Grave Bane a0010000 Common
03 Stormlander a0020000 Rare

05 Nameless Blade a0040000 Rare
06 Firebrand a0050000 Rare
07 Soul Fists a0060000 Common

09 Master's Katana a0080000 Unique
10 Cursed Axe a0090000 Unique

12 Broadsword a00b0000 Common



16 Twin Bow a10f0000 Common

18 Sabrewing a10h0000 Common
19 The Pink Scoundrel a10i0000 Unique


22 Firebolt Thrower a10l0000 Rare

24 Lightning Harp Crossbow a10n0000 Rare
25 The Green Menace a10o0000 Rare
26 Imploding Crossbow a10p0000 Unique



30 Wolf Armor a20t0000 Common
31 Grim Armor a20u0000 Common








40 Hero's Armor a20D0000 Unique
41 Morris a30E0000 Rare

43 Valorie a30G0000 Common






50 Ebo a30N0000 Rare
51 Frisk a30O0000 Unique
52 Adriene a30P0000 Rare





58 Panda a40V0000 Unique

'''

print('"')
for s in string.splitlines():
    if s != '':
        separated = s.split(' ')
        num = separated[0]
        name = ' '.join(separated[1:-2])
        code, rarity = separated[-2:]
        print(f'        <tr><td>{num}</td><td>{code}</td><td>*{name}</td><td>ZZZZZZZZ</td><td>{rarity}</td></tr>')
    else:
        print()
print('"')