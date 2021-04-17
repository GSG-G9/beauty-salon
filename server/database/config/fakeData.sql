INSERT INTO users(first_name,last_name,email,password,role) VALUES
('yasmeen','attallah','yatt@gmail.com','$2b$10$.HABPjtsd.qSMUNbNjNMueXgQ/jqYDr9i0kubJlQi61F9l9y9d6NG','user'),
('iman','sedky','iman@gmail.com','$2b$10$nlnDNBPGl0uOmfV.RLB4cufWueWKxJi67q9/7lQ3ZTjoAqiw5kkZu','user'),
('noor','sedky','noor@gmail.com','$2b$10$rk4DsjamEYvStvd6SG7pWOiZnYdTL8c757Y85Qb5eGn1vsmoqrjeS','user'),
('beauty','salon','admin@gmail.com','$2b$10$FpYb9OypRus6ElAG9iEztO0c9IMGXn1g3QGDtukFWYMiffJFKKO4a','admin'),
('adham', 'Hai','adham@hi.com', '$2b$10$7hOMiaf/b49Km4dZOp9oMevyYE50fjCXH23BKkhkdl70iy.ELpMMu', 'user'),
('abood','hjwer','abood@gmail.com','$2b$10$fjpGHZdEtOWCQYGj/roX2eHonN//udNdkuutwaK.ozNanIWDATLoe','user');

INSERT INTO products(title,brand,price,quantity,description,image) VALUES
('lipstick','Max factor',20,5,'To make your lips look fuller, always use a lip liner as a base. Etch over the lip line and your cupid bow to instantly define, plump and perfect.','https://cdn.discordapp.com/attachments/778557600017940501/825463225260572682/xs_colour-elixir-lipsti_colour-elixir-lipsti_blt0e82151a1c3a7129_ar-ae_1.png'),
('foundation','Dior',80,7,'The Dior Backstage Face & Body Foundation is the Dior makeup artists secret weapon to create an instantly flawless complexion with ultra-buildable coverage,','https://cdn.discordapp.com/attachments/778557600017940501/825463495687929860/23704380102.png'),
('blusher','Maybelline',15,10,'Maybelline Fit Me Blush is a lightweight powder that adapts to your skin and enhances your complexion for a natural and healthy look','https://cdn.discordapp.com/attachments/778557600017940501/825464592280977438/maybelline-fit-me-blush-50-wine-4-5g.png'),
('Concealer','Maybelline',50,4,'Maybelline Instant Age Rewind Eraser Dark Circles Concealer','https://cdn.discordapp.com/attachments/778557600017940501/825466442237083648/maybelline-superstay-concealer-medium-041554568431-c-us-wbadge.png'),
('eyeshadow','Topface',25,12,'Topface Pro Palette Eyeshadow:, Achieve beautiful subtle to bold eyes with these perfectly curated eyeshadow shades','https://cdn.discordapp.com/attachments/778557600017940501/825466169598541845/71OjqEd6ugL.png'),
('sun block','LOreal',85,6,'Vichy Capital Soleil is a daily anti aging body & face sunscreen with broad spectrum SPF 60','https://cdn.discordapp.com/attachments/778557600017940501/825465582816198718/61tlN0H-1BL.png'),
('olay','LOreal',90,2,'If your skin tends to be sensitive (and you want something affordable), this cream “contains tiger grass to help calm and repair the skin barrier','https://cdn.discordapp.com/attachments/778557600017940501/825467030781558784/9k.png'),
('mescara','Dior',35,6,'Guaranteed to give your lashes a dose of TLC, Milk Makeup’s ground-breaking High Volume Mascara was the first ever to be spiked','https://cdn.discordapp.com/attachments/778557600017940501/825467680454344704/9k.png'),
('highlighter','Topface',50,8,'Morphes Highlighters truly live up to their name. These daringly creamy, zero-gravity highlighters create explosive, prismatic effects','https://cdn.discordapp.com/attachments/778557600017940501/825468089960497213/2511232.png'),
('Powder','Dior',70,9,'An artistry essential used to set makeup, control oil, and smooth the texture of the skin, all while creating a soft-focus finish','https://cdn.discordapp.com/attachments/778557600017940501/825468934178340934/0607845014218.png');

INSERT INTO services(name,category,description,image) VALUES
('JUNIOR  HAIRCUT','Hair cuts','haircut will begin with a complete consultation for a personalized cut','https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg'),
('Curly HAIRCUT','Hair cuts','haircut will begin with a complete consultation for a personalized cut','https://d1qp59yxlq7zhd.cloudfront.net/media/01-10-2019-latest-haircut-for-girls_Long_with_Layers_3.PNG'),
('Mens HAIRCUT','Hair cuts','haircut will begin with a complete consultation for a personalized cut','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQlXN65ERh2zHfbhq4TmN5oSET5vrAnY-jq2HGzrct5sv59x0ssOKW1C3L3DgCOtLNpo&usqp=CAU'),
('Master HAIRCUT','Hair cuts','haircut will begin with a complete consultation for a personalized cut','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-HgGmgVOadBLCPbwNi0dWb5zs0-c43oih4vHuZwtZPjDS2duIq9rR-VihB9E-hHMCBk&usqp=CAU'),
('Classic Manicure','nails','nail lacquer invites you to flaunt a most sophisticated holiday manicure','https://www.almarasimsalon.com/ressources/images/710362c84343.jpg'),
('Dazzle Dry Vegan','nails','nail lacquer invites you to flaunt a most sophisticated holiday manicure','https://3.bp.blogspot.com/-49K6_wMSbCU/XEJ_2pNjE1I/AAAAAAAAFmM/2RsYnbH4ZNgrmzGSZ9rSHge-Ie1tmWw8ACEwYBhgL/s1600/DD_02%2B%25281%2529.jpg'),
('Gel Manicure','nails','nail lacquer invites you to flaunt a most sophisticated holiday manicure','https://i.pinimg.com/originals/23/a1/ac/23a1ac8a5acf935e5c8c55b269a6a1ae.jpg'),
('Pedicure','nails','nail lacquer invites you to flaunt a most sophisticated holiday manicure','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUYGBgYGBgYGBocGhgaGBgYGhgaGhgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjEsISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIANsA5gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADkQAAIBAwEGAwcEAQMEAwAAAAECAAMEESEFEjFBUWEicYEGE5GhscHwMkJS0eEUYnIjM4LxFRbC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACsRAAICAgICAQMEAQUAAAAAAAABAhEDIRIxBEFREyJhBRRxgTIjkbHB8P/aAAwDAQACEQMRAD8A+iYns8LSO9Mh0SYaSDSoGcWlojRbvSt60od54gksiivZeHkt6VGdmRMNpF4loEHQ5l4ENCmdK2E9ednMjBK2lRMtcSipKoh4WkCZ4TPMyUQkDPKiaAz1BL3TKHyl8bROVNFdIwlDAqbwlGi0xjRGrMV7R2oUhl04/XP1M29Qc5n9v0d5CekDNG4mzwMnDMn/AEUbMuBWpMp/UBhvUaETzZl0QxRj41yM/wAl5H86zP2NyaNQMNQOI/kp5RnWqgVUqjg2h6/+9YEJ3H8nTy+PUml09r+fgc14HUeEPUyMxLte73EY88YHnylydGPHBt8RXtWsKjbmdAfF3xyhOzrJqhCqMKOJ5ARRZKTqdSfmZvdk260aWWIBOpioJ5Jb6R0crXj4/t/yYTbWIVQo0AnQavtZM6NmdNXKKOb9PM90zQiQM9kWkOez3MizSLmQYy7Ko4DMGudqUqZwSSRyE9ua26hY9JmrGkajl24Z0HKLcnaS7Nvj+PGcXKXSNHQ25Qb926f9wx84zTBGQQR1Gsy+0bFNwtgBgPLMG9ndqsrinxUsAOup1/O0nKpcWHLxIyg54r12mbZVlglW9Jho5M5skSKSGMSwGeEwgCsiVuktIkTKICOmJTDnWUmlIRkaSw+kkHpJDaSxyQiTEzrusR0OJajyW1ae6+eoz6wVGmSSqVG2D5RTDcwS6ohgVPPSXq05zL7Cjado+dXlMqxU8VJE8o1CQVPA6jsw/uO/aez1FQDs32MzqzE1xk0enwTjmxJ/+sfUqx3AeR4TObbuCzhM6DU+fKN7OpvIy/xG8PIfq+X0ierauS1UowQsFVyMA8R9VMc03G0ZY8YZ+MvfQTs/ClWIyM5xDr7abOeg6coAG0HlI5iOTSpG94oylya2iRedKiZ0XY2kfVZBjJMZWZ0WeMR40qBkmaUO+NTwElhpfAn2/cZK0xz4/nwhllQCqAOUTW595XZzwXOPM8I/zhYENtyOnkXCKgv7/kV7eucLgc9It9maO9cKeS7zH0GB8yJTtu43n3emphvsud1mbqAPnk/QRd8shrlB4vEfy0bcGSVoNTqgiSDzSjz0gxXlbvKBVnlR4yxVbL1eetAUq6w1TKsuiJnBpMiVvTkLVFqGGUhF6HEKpPCjP5F5Md7RHa9HKb3NdfTgYjDYmgvmymOukzjoVJB/BF5q5aGePfGmEI0saB+9A8zoBxJPQDnCjbhV37g7icqY1dugbGv/AIjUwYQcg8mSMFs6jY+/JB0pgeJ+R7KTxP0mK29QoU6xWi28oGGOQwz0Bmh2rtZ6g3ATSTgEXHvCPmE9dfKZ26pUkBHgQ/xyXdicau2pzoNScw82JcNdjP07zJQzfdfF+l/yT2QVBLsAVAwQf3Z/bC9t+0CFGRxhT+0fq45B7dZnal626FQEcySPpBEsidW1PeDCajDj7NHl8s2fnF0l0GUiGUMp8weI85JUJ/zBFpMvDI8tJJ948STjvMrxps6cfNlwprY6srZCP1Z646955E9NcEknjOl8EZ35GV+z6u7SlmkyYO8ezlI6pUiva9crTYjngfE6/LMLrPE23qvgA6t9oubqLNfjQ5ZUvye+zduSCep+kY7Rqbue0Q7G2qaWh1HSX7WvlYZU8RJGcVDR0J4ZvPtaEV2+WY9479nDne7DP2meczQezKEsdOC6+p0isW5WafOqOCjQ0q2DCPfRc+kqa4wxGe81JnnpR9jYV+873oPA5i1KueAPyEmtdv4n4j6Q7EuISz6wirtJae5vHG9oOmYvFUfuyvbWLPaHWkmDndf6iDKVJ0PwYVkyKL6Zrff6ZBzLqVTMxPs3tIk+7Y56ZM1tA6yRlyVl+R4zwycWFhJaqyKHMjVuFTjqTwA1Y+Q+/CHRkk6OrHJA6QG7pb+CnLQuf0gdv5HynXV2i+KoR2QZI/8ALH6uWmg84A717j9A3E5M2mR/tH5w5QlBdyFPI3qBbUvaVDO6d9zxbifJQOA8sf8ALlFFSrUqneJODnXPLs2NB2UecLfZqodfGeOTwPp/eZ7WfAECeatRQ3H41u5uxJdUyBug4HMLpnzPE+pgtPZ4PKMavGe0Zm5OTtm1RUVUVQPT2aonNZgRkDIsIWiJsVPYwd7PtH4AnjW4l8Rqk/Zm2tZ7HtS0nQaD5DulciTrOMZiNqhVsQk3Xh4w7+THxI3NWJdsVMqvmftCK1xrPdp2ZNJG5neJ9eHyi8n3RdGzw2o5lYhzIO8m6yhzMuz0ars9Qaza7At9yhvc3PyH4ZldmWjOwAB48pvTSCIqDgBNWGFbOL+o5lJqCAKzZiW/qYdfL6GOqoiLaA8Y8j9Y1nPVBlvcnHL1MLSp29dR88RZbLD7i4Wno7+LTwL4m9cfp4jQkGFFNiJyjEse4/M5gV0odGXqNP8AkNRj85ywXiEZKOfKmT8yZH/5ED9NFz3JRPuZco/LRUMri04p2JLDf31ZVY4IzgE465xN3TvEUatk9F8R+Wg9ZnEvqzturRQd3cnHlurGdtZVW/XWCjolMA+jsSflBhGMfdj/AC/Iy56bilX5Dq21mx4VCDXxORy6Dh9ZRRaq4LUwQD+qq+Rnpug6nX6RlabKpKd4qXb+TnfPz0Hwhl7V0Vev2juVLRz/AKbct7ArHZKKd58u/VuA8l4CNGkaAkqkXbfYdJOkLr2hvCI7rjiaZos2naBhpoYuUbNEJemZ91lYfE6s5Q4fToeUpZ4o01YUteRe5g4bOkru6m6ABz1Jl3qxmHFzlxRd/rwJbT2iO0Rlus83ot5HZ0/2MK9mqp1gRn+sTpmadZhwYj1nS/qoS/A/I1v6muYMLg4xOvGzBaGpxDZzklQXa0i7gdTr5c5qyBjGAYu2VagLvekaqIyKozzlsHbZtMjVAPICBXGxaZ4KAfKOgT6yBzCLjnyLpv8A3KNl7OWkM8W4cNB5S6uZxaVVGl2Dbk7fYK4iG/X/AKmO33jyo0TXK5qnsBBYxEw+4g6n7fg+MJ2ZbKF3iPExySRrgn78ZS9LJweAwD9T9vhCVr9IbfFUKUeUm/gvr0OY4RfVp4hrXDY1EHdsxcmhsYs9tnxjP4I1t6wiOu2FB6Nj0MnRuoKkXKNo1VKvIV6m84HQfWJqd5iEWtfefPkIbloSoUzRUjpPXaV0jpJOZfoU1sqZpTXljQa4MqxsUJ9p0QwMQe5KnA4TQ3T5iwprBaTY9NpC8XAVirHoZResdDy4ZlN3rUYjrj4aSdJOXKBJWqH4MrxyUioV8jBAM9GJa+z24rr2lBRl4qR6TPKMl2dvFnx5FcX/AET3504YPET2DTGWg26iugxNVUXiWAHmTiNb/SWey+zM1WrtwXwoOrEan0B+Z6TZWzzXKo2aulSCKFHAAD/MvWQQd4Snf06fGGkZGzwgSupLHMGqNLIistiU1GnrtBmeVY2KIOYFb08u7d/oIXWbAzCdlWuaeT+77yltlzdIrr0SURRxZh9CWz6kRnbbKUAZkdkhmch1A3PCMa5zjxHTQ6R1uRySk7M6biqF1XZqEY4RDtCwamc8VM15SLr2lkEHuJU4poZjm77MdeN4G7YPzgFKvG15bEB0PQ/DGR+doq91iZqNiaoLpPGmx2y5iOm0cbEbxHzltin2a2jwljyFDhLCI30ZZdlLCB3JhzpBLhJTGQaM9eEg9oNWqBUZ+gPx5RhepMnfXTM25yU69yIPQ+rOt0zDqdGCWqxvRXOJXZJOi63pZhNGnxHEdCMj4GE0aOE84Ra2hOgBMYoivqVsXmwVv2D00nTXWeyNPFOhfS/AP79rVnzu6oF2CqMk6f8AuPrC3amipod0akd5Vsyl42fHDwj14/b4xk1N+REW1suUtUSo0t7Uy0ru/wBfeUB6g/bKat0eYI5fhktIHi2XO8HdpBq2ZWSeWslhcaPHMHLay5zpBqjSDIg1/V8OBzIHxmpskxSXyExVzUy6Dq4+s3lmAUx2khtsmaPGKOsFwzd8GNHTQRXRYh1HXSOH/THw6MWV1JArCQvaegPUZ9ecsaetqmOY1HlzhVaJdNMy21aX7u2D9vqYnr0tJpNoplW8s/CI7iycJnIOmoPhPwMzuO2bdtKhO2ka7CfX1iKvW1xD9h19T5xTDo3tu+kJieyr5jak2Y2Lsy5I0yTCC3CwlpTUhtAwexFfLMjcUv8Aqv3OfjNpfLMld/8Ad9BEs3QVl1G3jHZyZbBkLVciXUvC6noYSAmrTNDTtwwHSPNmoqjAxmZ7/Va6cITb3ZzHRkkzHkxSlGjTidKbervKDOjzntUYqwG6niGCSTr3jCm69Z77sHQj88p5/o06Y8pj2dJtey5nH5zg1Vx0nNZdHMqa16sfl/Upt/BcUvk8fB5Ayh1HlLHpAczKXHeQNIGrmL6rQm6fEW16kjY2CF965DoddHX6zc2F14QR0me9n7D3lYOw8NPXzYjwj7+ghTBrdyh/QdUPbp5jhBWtjJOMvsHz1dfzjNFa1Q6g+h85ixchhL7XazUs7uCDxBjIZEnsz5/Gc4/b2jVPa9DKTbsDkYiX/wC1dV+uJNfapDxHwJ+4jfqQ+TN9DOvQRd2zE8OP3nz++vGDNSY5CsV76Ega+U3w2/QYatu/8tB8Z8421co1zVZSCrN4SOB8IBx6gxGamrizp/p983HJH0B3Sabwktk3GpHeSYaHp9Iqo1dyp64/qIg7TTN3k4kpJr3o+i2N4iqAzYPTnr1j23qg6q2RPmqVCdeccbKu2pMNTg8R2MOGVXVCs/gVG09/Bv21xBqzSy2cMgOYPcNNEjkQj91C+6aZHaaEVh0Kj4gkH7TVXDRBtVBvo3cj46/aKl0bsemHWXCXVUldkNJfUEtdFS7JPUwFPUfTSEW10OsDuv8Atg9Dj4j/ABF1JXY6SW0wVFSifQdl3IwRmdMnaXNRBggmdHLIYZ+Ncm7HyLLCO3zkVXTQ4/NeM5j5wCMgzHofjB3aTd4O7QWHFFbt3gdV5fUaB1nlDUB13zFldenpGFUyi2Gai9FO8fT/ADiU9joukanZ9sKSBR5serHifzpIX9NXXdYZ59weoM8W4zIVnzLbFruzOXLNTOpyOR/ueLd5l+1ae8pmdRTyJHqYujVGWh4a4lNS4A5xYUP8j8TIKmJKDUkE16xbTl9YDcJpLy0FuH0kGRewinW3k468D9jFFycVB6fWTp1cEgnjA6l0C6nkpHyOTKUW2Nz5YrGre7Ro6BmurWYq0FdR4lXHmBxHnpMfSGCR0JHw0ms9lL4Ammx46jpnmIGGuTjL2O85S4LJHtb/AKGXs5fZQoTqvDuIXXqRTtG39zWV10VuPQHn6c4RUrZmnaXFnJlBSl9SPT2RqnWIvaBwAn/P/wDJjqZj2gq5dU6Ak+vD7wJOkO8aHPKkPNn1AVBHSGkZiPYx0AzqQxPbHD46zQ2dPOp4Dj6Q47QHkxWObSKdqgJSUcyw+Q/zKKNPCgiU7UufeHI4DRfLrJ7IuAfCZE1Yri1Gw6jeY0InQa5TDGey+TB4pmlJ/MayqpJsZS8tmNFT46yl2EsdpQ0oYilzBKphLiC1pA0AVTmTsEADMeenoP8AP0kKpzoPKSL7unSAxnaLjWK+UsW6BgFWuDpAHrlT2gthqNjK5qxLWTBJEua6zA61bkBknhBsYlRIvKmrCWNs1gu++hPBf7k9nbF32y2o78IdFKS9Ae+W0RSx7AmD3FCpvbpRlJHEjAn0mw2ciKAqgQu52YrDBWXxbWglnjGSUuj5U2yiRrrn4wavsbH6Sc99RPo9bZajTHDgQdfIiI7m1zn5RT5x6ZvjHx83oRbPdsbr/qXQ9xyOecbWtYqQw4g5EAuKRXXmJbRqZAMS3uzesaUFG7X/AEfQS617fLDGRnyI6RVbZKqe300i2xuqrAU1JAOnaaGjQ4AcFGP7muMuVM4eXH9C4327X4RS5CIztwUEn0mEFYu5dtCxz5dB8Jr9uVRUpMKbHFNlZ8cHGoJHUA4ielsk1VL013iNWUccfyA5ysibpIZ4WSMG5T1ev4G2w7Mkb3XQeUebTtXSjgDG9xPbpD/Yyihog7viUkHPKP7q3V1KkaGaI47icvyvM/13rSZ8oJxpIU6m6wx1jrbGymRiMacu8TvQmaSadHQhOM42hpVDNg8Z7JbMusLunlPIdoztST6NIx/BKHPaSd+UocwmY0jxzKXaSYyqpIGihzAa7wirUi+u8pjERQ656fWeVjmDirPGqwGNiiqsCIvrV8cYbVqwK3tDWfdA0zqZSQd0rZTZ2tSs2EBxzM2OzNhpSG83ibqYy2ZYJTQBRjEje1dIaiIlNy0hDtVstiMtmUwAIpuzk57x1s/gDIFFUhxR0l9StBVMi7wk6RTjydkLhpnr2nqSPWOqz6RdUEF7NGOXETXFIOOjfXtEdHKuynTXT15TXG36c/wRZtGxHvmBXGika8QRx+OYt47Nn7vilXaCdj3KorMQSVHAcdTj7ydztR3G6BuKeIHE+Zk9n0ACD8RxDDGD5RhSsUBzgAZ0zxxGQi1GjJ5OaE58kB7IGGAIyrAow/2sMHP5yjT2RpNSuCh5FlPfH4ITbog/csZ7NswbjfH8QT/yxj7Rii7RhyZvtkn00aRUA4ACTnTppOSC3dotQYYZmdu/Zk58ODNXOgygpdjseeeP/FmJHs5U6Tptp0D6UR373J+DJsBB2Ik3eCVaw5xI9Jnr1BygtZ+8i1fMGdz+ayrDUSNZ4tva26pJ4nh5wuqZn9q1fGBngPqZGxsUWrWnrVouFbErqXP7RxMGhugqpULsEXiZsNibPFNB1PGKNhbPCjeb9RmhZ8CXGNbFZJXpBjVMCKb2pLGuIDcvLbBigO5aM9k3IxE1YyujclGzy5yr2NS0bf3mkpq1ost79WXIMHvL8KCciRyLhC2HVK8oNSJfe1XUOrKFbVQSN4jrjMpS5qKwDYxnU44f3A512a4+M2rRqrdMkRL7Q1cXPh13EVGHfVj6jem69ndloUWoWD5GRu8PI94PtP2NV2L023SxJIOoyeMe4Nx0cv8AcwWRqRjqd+eSgS5K7nn8o8HsfVH8T6w609lWGN5gPnKUJMN58KVpoS2Nu7kDU55TebMshTXHM8f6ntjs9KQ8I16njDY+MK7Ofnz89R6PZ06dDMx06dOkIdOnTpCGGqJ3MGdEHHXzllUwKo2syHVR7UqL5eWkHZye/nK+JljcJOwugSuxmLv7vNVzy3sDyGn2myuOB8p8/v8AjKS2E3SLalziNNh2uTvt6TOUtXE2Wz+AltUEnaNDbPLa9TMFpcJJ5AEtg71cSl688q84C5i2OSLqrwWo85jB6sotItsbapUfdQlf5HkB/c09p7Nhv1kserHMq9k0Huicaljr8JqbWMjFPsp5HFaEVzscouEbGBwGkR1abZwwGuhYaHzI4es213wPlEV+g3TpJOCHYM807sK9gi612TJ3SuSD1BwCO/Ly8p9HmJ9jUGS2NcKM+s2sdgX20cr9Rkp520vSJTp06OMB06dOkIdOnTpCHTp06Qh06dOkIf/Z'),
('Vitamin C Facial','Skin care','Treatment revitalizes the eye contour,targeting puffiness,dark circles','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NwzCHZ9egdsjeWgcaDITRfoursCZ5u9WCAVONwCv5IyOoseFGK5HhYF9e6JF_WCiL6w&usqp=CAU'),
('Oxygen Facial Deep','Skin care','Treatment revitalizes the eye contour,targeting puffiness,dark circles','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGRgYGBgYGhgcGBgaGBUYGBgZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD4QAAIBAgQEAggEAwYHAAAAAAECAAMRBBIhMQVBUWFxgQYTIjJCUpHBobHR8BQV4SMzYoKS8QcWQ1NyssL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAQEAAgICAwADAQAAAAAAAQIRAyESMUFREyJhQnGRBP/aAAwDAQACEQMRAD8A9VJjLmOTiLeBXcbS9F/AzFTf8STMjDsZgIdX/wA99WCEIQ6RCEIBCEIBJOGxRXQ7flI0IRZLOVoqGIBklXmZo1yvhLTDYu/OUs4x1m5WgMUrSOlS8dkKn1MWDGEMdBkBwQIiQYoQI9ekGBBFwd5l8bhTTax2OoPUfrNiVkXG4DOpGU9jbY9ZOeyrZ1IyEIqrTKsVYWINiImaNhCEISI7h6JdrcuZ6CNqpJsNzL/hmFCqWb3V1J+ZunhDLy7+M/0z/Lh8n4wlj/E1f+00Icv8mv2vGi0FhE21nXPKGZuql1M89rrZmHQn856Sy2WYHjNLLVbvr9vtDfwX+3EGEIQ7BCEIBCEIBCEIBOo5GonIQLLC4vrLSlUvM0DJ2ExXIyljHWefS9Biw0jU6lxHFaUqp8PH8MhY9pGpoWIA5y1SyCwlszrPeufR+nSCxzSNI0M80YGcbgadUWdAeh5jwMxXF+HGg9r3VtVP2PcTdlpU+kGGL0jYEspDADfobeRMNfFuzXPwxcISZwzC53F/dGp79BDs1qZnaZrNUoor08O9d21yLoUT528eVtZf4LiNKrSFVf7umWuNbO6MUCi4B95T9JDwmOro5Vaau9Vyc6myUkFwjPfcaABRvl7xni9cC1FTdUJLH56jEl2Pe5PmTDjzL5N+z/8AzNX/AMP0hKWEOr+LH6eoerA5TgpCRE43h2BYVqdgMxPrFso6nXQaiN0/SDDsAy1UIYEqQ66qASSNdrA69ocCwdCRaZjj3CajEMilj2ttLlON0W911b/xObw92Ppj1O3jqCPzkdi+flm9486xGHdDldWU9CLf7xuenesRwQbEEWIPO/KVeJ9GqDD2QUOvune/UNeS6M+ef8owsJY8S4PUoXLDMgt7Y212uNxK6G01LOwQhCFhCEIBCEIBOzkIE3C4ojQ/7ywTEyijqVTK3P5jHef02mBWyZuZ/CSCZWYDE3pA8xv5ST6648ZaOO/ftJzxSPIyNF54Qk551TeQlrAmwP76CT6awK/iHBadW5tlf5gPzHORcFwn1Zs/uIM5bk56kdpfSNj1UocxsoIZu6g3YeY0hb5as+Kmx+NCI1QAK9X2UAAByroajde3lMrJXEsYarlzoNlHyqNAJFh2eLHxz/ohCENPau4N/wAOaQVTUzE215En/wCfAfUzXcP9GcNS9yigPUqCfMmXCLHZhe37YyTM9EIgG1oomFp20BOYx2limX+sQRElY+ViLmVY08QrixtqLEH96zNcW9GyoLUbsLklOYBPw9QJZESl9IePPRXKjkG1yd7eF5pnXWfLi9lUjKQbEWI3B3E5FcER8TneoxuNAd8xt8V/La0cxOGZDZh4Hkw6gy3XRjfyhmEISWghCEAhCEAhCECw4Xj8hs3unft3lz6y3hMtJ2AxRBCHY6DsYc/m8Xf7RoEr3nKtXSQFqWg9ewhyHeH4stXVCLaNbvYTToJjMHVArIb/ABW+oI+82aGAuNV6YcFWFwRYjtHYjnA8/wCI4Q0nZDy1B6qdj++kizYek2AzpnUe0mvivMff6zHw7/Hr5Z6IQhDRuAJ20AJ2c7B0Ts5O3kgiSIowgNVDYTzz0gJeoepIHlfT7z0OpM1iuGXrByNN5GdfGo1n5RL4PhfV0wo3Op8TJRamTkqC6HnzQ/MDyiqZ9mRKtDNK3WpexeZnOIfGOEtQI1zI3ut9j3tK2GL9L8lduHrT9ecqhbm2SoQSy5uQUFTflqO0nfyp8oN1Y21AJ352uNZ0fKflGN99X/1BhF1aLJoykeMRLNhCEIBCEIBFI1iD0N4mEC2LX1HOV2LxBF+2kewdXcHlciN4HB+tKofdHt1CO50XuSSAB1MPO3n46sSeD0iiGvUNiQSvPKm2YA7sTovc/wCEzVcKx4qIrbGwuDup6GZnjGKGiquYBlSmi/8AVqn2URT8o1Gbawd9jOYN8jth0YPUpgVMRUUCz4ir8A6KqKAByUJCrbipOLK7BBiPaN5ZIIHSJh+PcP8AUvoPYe5Xt1Xym5lV6SUc9FrC5WzDyOv4Xhp4tfHTEQhCHd2t2BOmJvEkzBgXCJUxQET2kTokHF8QRNCwB6dZ3DY0PtAlOLyLiKUlqwgwErZ0l4qS5GkzvpR6SGkpo4YZ8Qw3Gq0Adnc6jN0B8TpvsnoK24/flIScGoqbpTRTfNcKLliblidyb8zrJl59l9zkZL0O9Ehh71qvt1n1JJzFb6nXmxO5m1RLaTookc4u3aRe29qZJJyG6lIMLEAjoZUYrg/NP9J+x/WXs4wk51YmWsa6FTYixHIxM0+PwSuOhGzdPHqJm61IoxVhqPx7ibZ1NLy9IhCSsBgmqvkXTS5J2UdZZNsk7UWLo08zBf3brLuv6MuBdHDG2xGW/mLym4JSZGqB/fGj9jcXA7C4t2hhvzTn9Ux6aqLAX5dyToJZ4XCimhQsFABes4Nsii4Ygjnoyr3zt8Ikbh1Wm9XKHRnU+zTV1zqds5W9wBewNtzflDjFP1jjBZgqACvjagNgtMe5SU8h7IUdlvveHLbb9oGExFw2OYKmctSwFNtLKQc1YLzYqtltsq6e9Lj0Z4D6mmc987uz1CT7TM3Nz1ty5Rzh3D0xFVMW6jJTXLhEt7NKmQBnttnYAW6LbnNGBCDdKkBHIRLvAHeNHWcvOMwAudAIEP8AklH5BCH86o/OPxhC39/9dvEkxJMQXnNa6+H0lZxvjHqxkSxc/h5Dz30hxTia0V6s2w87X+pExeIrO7/M7nyt0AHLudO0vmemete+HqmMZmF2LOeVxc/Y/wBJouFUSi3b3jv2kfhXCPVjM/tOfovYaCWNusrq99RfGee6mpUgakYSou19Y4RM7LGnov187/ExgiJqbSPlTkShiI8jXlOjywoPpLZqLOJpURtxaVPFeN0sPY1GNzsqgsx72HLuZLXEZ1DLsdZbsqvxs9nSZDx2EWovRhsenj2j6vOkystlWrKVaZUlWFiJqfRvDhaZb4m1Ph8I+/nGMZhBUW2zDY/Y9onB4o0lAYagWI6gTpzr5MvNr+rRowI/ekhY7A03uWRcxFs+xAtYksNbAflEUscr+0hB09pef0gjLVbJmUrqKiMCS1Mqb5Vt7RJsunU77SzlQ6lWn/DI1VRZnthRqtXUEU8rLqGIBJtawOsX6M8OdKbCqRUZ3zvU0vWzKCuewtdQcmmns3Fr2DiqtaolYlgFTKiMAvqr+9YD4mAW/QC2mstFcAWEB5VA2gzRn1kGeAt3jRN5wLfUwd4HGe0y3G+JlyUU+wND/iI+0mcb4iU9hfeI1Pyg9O8zkOnw+P8A5UQhCHU17NI2IrWBPT8I5XUqSCNif6GZz0qxWSkQN3IUeZnLzt4y766qWxD4moSoJzGyDTbYNc7Dc3738dbwrgq0RmIBcjU9OuXpI3onw8U6edvfcAk8wOQl5UqTS2Mpm9MV2tIFUmSDUuTfyjNVgAWY2ABJJ5AbkzP3q+m3rM9qepxOmMQlDNd1s7KLk3Y2QaeZ/wBPWakC9p5z6GYf+Ir1sXmuGdioDXKjZQRsGygb+U9HpDaW1JPSmbb7ruSMYhNDJ6rOVEFpHxT8lBTfWWNPa52AufASBjsMUOYbQpY6y2PPSUnq+2lnZ2KH0MotiVbEVluzsza8gT7KjsBYCbKkgXQSPgnFgEXKPpJzLLSflW38U06RipVCx6q+USpqudhudB+smRbOfkkYXHh3ZbEEG3Y6ax7H4bOns+8PdPXse0h08MFXTca97+PWT0ckA9RLd57V3iT/AKZpVPvC4Kkg2JDKee0l0gC61MzMVRxq/uu9lzDmQFBsDc3a99BHeJ0WVvWpvs69RybxjdCrTc+17DfS/wCs1zrscesXK1pV3Pw3klGqfKPrIFLDuNUcHxj4q1V3S/gZZRNSlUO5A/GTEp23NzIOHxTndCPpJJcmA81SVPFOJCmLbudh07mJ4lxJaegsX6cl7n9JmajliWY3J1Jhv4vF33foVahYlmNydzEwhDsEIQgbfjFIhg3Ii3nqfLeZHiuF9ZVpAjRGLHvZTb8bTeYtA6EG556bm3Ia/nMxUTUmxHY+8PHvMd55euXxa7OVLpNYRjE1bCJWppK/GYiY6v4b5nt01dd/9pifTH0j9cDhMMc1/wC8ZSCWUalVYG1uvUA8t5HFcHisSxTMEpfKhJZ9d2NgAO0n+iPoaKD53F31sTqACLG3fTfuRNcyZnfyz8ndXn1Fx6EcM9ThkFiGYB2GuhOux28BzvNVTWN0adtBJKCRZ2n1OFqIOICBkqmXQHlGP4RL3yj6SUYkwt02EAixAiczW1hCDj31tyEr8JTLMXO2y+HWFeoXfKDoSb+Atp++8moLDKBrIk66p/WcJYZjlElhbC3Sco07axZEis9a76NMkpMfg8moF0PI/CZoCsS6AixGh0tJzrlZ3/WcoVguzMPO4k6hxJhu4PjpK7G4fI5XluPAxidCP4M36alOJpb2nUed5X4/jRN1p6D5uZ8OkpoQnPgzm9+3Sb6mchCGwhCEAhCED0pG0mf4rTCvYD3hm/HWXdJuUgcaoiwe9iLL4gn9dfrKbncuDxXmlIEikwQO8eRNZLpic0jrM0cIo5SWiWnRFBppFbSlE7eJzQzSVS805mjd4XkdTw4ZxjEXnGMdOV12lZxXGhEJ5nQdydJOdpRY7h7VagJNkTUDq3U+Ei1bPO+3MEpO25sT202l1RpWjWGoBBYCPgx1fWu/R0wVZxY6giTrO3hJWNESQ8ZaTYiVUcdo+yr8wbHwP9fzlJNDxtv7O3Vh9zM9Ns/TXP0IQhLLCEIQCEIQCEIQPQVbWdri48REkRStfSHmM6HI0OhGh8Y+laPcWwp98chr1tcW+mspvXWnLuXNd2NTU6uVqxXrJTriY8uIlfkv8ViakPWSCKs6KkfJHxTPWQzyKHig8dOJIedzSN6yd9ZEqOH4C0ZDzueT1HDpMBGs06ryenEhDHAZHFSBqS3VbEhmjd4y1SRcZjMi358vGR3tTIr+NYjM+UbL+ZlbOsxJudzrOTok5GsnIIQiWvK63nKXbx6ml41TSS6STn15dX6RwpaI6RTYQGPIkfVZWa1L9oqv/ge/4QljlnZf+TSva0TaRGeLqbX5iN38PCdTgPKbzOca4fkOdfdJN7kaEnl9fwl4Ht+se0YWIB7byuszUXzq5vYwxa0UtSSuMYA03JAOQ6htNCSfZ7WlbnnPrHHZnXZ2JyVY6tSV6vHkeZ2L9TleLzyGjx0NIOJGaAeMhorNJOHs8A8avAtCOHw87nkRqkbfER04nGrEnESqqYrpOU8zbx2nFk+J5DWQqyl9/LtJdKnYWEHoy0tnuKdVDrY2MTLKrQuJHpcOZ7jMFHWdGd9n+rXck7UAPeSEpy2ocAA+MHykj+TsNiDMNePVvVZ5c/tUJRkykklNg2XdfvEIJS5s+4t85fp1UirTs4zQh2EReEkaNSIwy2P71iqbdPpFVBcXna4DTWEEqa/u8AdPvtvEsO3WA7iKS1EKMNGFj/QjaYviHD3okBiGBvlI0JAtuOus2FOrbQzmMwgqIVNtQbGwJU23F+crrPYvjVzWGVo4rxWOwrUnytzvlPJgPyPaRw057muual9paPHleQM0WtWUuV5VgHis8gLWnTiJVZONSNvVle+LtzkV8VfSQLCpiYwHLRmlTLbyyw9CEW8Io4eT6VK0VTSPosvIpa6ixYE6BFAS3FTT05Dr4cMCp2MsY26yOCmwvD6oYhLkDnm/PWW9HB4gfHb/ADXiUcobqbGRMXxGte2a3gLS+eSdvVdfK3k4uaa4heaN46H6iPe976EdxqP1mWTFv87f6jJlHiVQfHfx1lp5c/St8Wvv0uKmDv7jeRkRsK+2WFPi7cwDH04up3BH4xzGle+TKJ6lukJY/wAxp9ROR/Hj9n8m/wBJboRrHEeFwYhltqNpuwDoLxJYfSONtEXgNRVOpynW6xl18u0BeKoJVXKwBB5TEcZwj4Ygm7Ifit7h5Bz3voZs0qdekKyK4sRfsdf3/SV1nq+d3NYBcUDrOHEiOcX4UaDnKP7JvdN75T8pv52kJVBmGvX3HTjmp2U82KjL4zpHkogx6nhRMrY1kQ6YZzLPC4S0fo0gJNpqJBdOUaFpKRJxDHLy0ipaCOrGgZ3PJiEiEaDTuaSg5ecMRmnM0BLiRcVSzCSmMQRIopG0NjOo8m4rD3leyEGUsXlTEeKMiI0fVoHbQheEDWruPOPGEJ3vPIG0S/6/adhAQdo3V5/vmIQgMR2l9jOwgUPpd/ct/l/9hMkkITLyujwpFOS6cITkdaVT3kmnCEmKU8kcWEJaIKioQkoLWdhCAQEISUOGcEIQE1JW4mEJWrQwscWEJRJ2EISR/9k='),
('Ultimate Diamond','Skin care','Treatment revitalizes the eye contour,targeting puffiness,dark circles','https://bellusnstyle.files.wordpress.com/2019/01/img_6575.jpg'),
('Ultimate Diamond','Skin care','Treatment revitalizes the eye contour,targeting puffiness,dark circles','https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013'),
('Wedding','Make up','help you find the perfect look to encompass your unique personality','https://wedding-center.net/wp-content/uploads/2019/02/makeup3.jpg'),
('Simple','Make up','help you find the perfect look to encompass your unique personality','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uFGUYkWvsOJwWR0Z-enI4AQZLIXthYalWAgLgFzK17Fq-Ff4Cs4ORO8SnRtnoNOea6I&usqp=CAU'),
('Smokey','Make up','help you find the perfect look to encompass your unique personality','http://www.stylesweekly.com/wp-content/uploads/2018/01/15-hottest-smokey-eye-makeup-ideas-you-want-to-copy-now-4.jpg'),
('gliter','Make up','help you find the perfect look to encompass your unique personality','https://i.pinimg.com/originals/a4/20/89/a4208987338d1d524ab482219b9df9d3.jpg');

INSERT INTO orders(price,quantity,user_id,product_id) VALUES
(20,1,1,1),
(160,2,1,2),
(120,2,2,5),
(200,3,1,6),
(180,2,2,8),
(90,1,1,10);

INSERT INTO stylists(name,service_id) VALUES
('jacob',5),
('jacob',10),
('jacob',7),
('jacob',9),
('tokyo',12),
('tokyo',2),
('tokyo',6),
('tokyo',8),
('lynne',16),
('lynne',14),
('lynne',11),
('lynne',13),
('lynne',15),
('joeal',1),
('joeal',3),
('joeal',4);

INSERT INTO appointments(user_id,service_id,stylist_id,appointment_date,appointment_time) VALUES
(1,11,3,'2021-03-30','10:00'),
(2,6,2,'2021-03-29','11:00'),
(3,5,1,'2021-03-29','12:00'),
(4,5,1,'2021-03-28','12:00');

INSERT INTO blogs(name,description,image) VALUES
('why to Add Vitamin E to Your Skin (and Hair) Routine Now','Next to flashier ingredients like retinol and vitamin C, vitamin E is something of an unsung hero. You’ve probably spotted it in at least one of your products, given that it’s one of the most widely used ingredients in beauty (it’s typically listed as “tocopherol” on ingredients lists), but you might not know it does far more than moisturize. From powering your other actives to working its wide-ranging benefits from the inside out, vitamin E does it all—and truly deserves a front-row spot in your skin care lineup. Below, six reasons why this hardworking ingredient is one of our favorite antioxidants (and should be yours, too).','https://cdn.discordapp.com/attachments/778557600017940501/825477578386571274/woman-in-the-sun-feature.png'),
('Things You Didn’t Know About Facial Redness','When it comes to your complexion, seeing red is not always a good thing—especially if you have sensitive skin that reacts from the slightest triggers. While facial redness is one of the most common skin issues to deal with, the whys and hows behind it are often a mystery. So here are some facts about redness to keep in mind the next time your skin is looking flushed.','https://cdn.discordapp.com/attachments/778557600017940501/825478723259072562/2Q.png'),
('Face Cleansers That Work Great on Dry Skin','Of course, dry skin is not a winter-only issue. In fact, dry skin is considered a skin type, and can be caused by genetics, conditions like eczema or psoriasis or simply because “some [people] make less oil to hydrate and seal the skin,” explains Dr. Papri Sarkar, a board-certified dermatologist in Boston. Skin also becomes drier as we age. “Older patients have drier skin because they have an impaired skin barrier layer, produce less oil and have decreased supporting tissues in their skin,” Dr. Sarkar says.','https://cdn.discordapp.com/attachments/778557600017940501/825478504421785680/0220-Blog-Featured-FaceCleansers-V1.png');

INSERT INTO contacts(user_id,name,message) VALUES 
(1,'yasmeen','hello can i contact with the maneger'),
(null,'huda','my wedding is last week can u help me :('),
(3,'noor','do you have  eyeshaow from Dior or top face');
