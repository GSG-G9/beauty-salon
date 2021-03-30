INSERT INTO users(first_name,last_name,email,password,role) VALUES
('yasmeen','attallah','yatt@gmail.com','123456789yas','user'),
('iman','sedky','iman@gmail.com','123456789emy','user'),
('noor','sedky','noor@gmail.com','123456789noor','user'),
('beauty','salon','admin@gmail.com','123456789','admin');

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

INSERT INTO services(name,category) VALUES
('JUNIOR WOMENS HAIRCUT','Hair cuts'),
('Childreen HAIRCUT','Hair cuts'),
('Mens HAIRCUT','Hair cuts'),
('Master WOMENS HAIRCUT','Hair cuts'),
('Classic Manicure','nails'),
('Dazzle Dry Vegan Manicure','nails'),
('Gel Manicure','nails'),
('Pedicure','nails'),
('Vitamin C Facial Brighten, Illuminate, Refresh ','Skin care'),
('Oxygen Facial Deep Cleanse, Clarifying','Skin care'),
('Ultimate Diamond Facial Lift, Firm, Anti-aging','Skin care'),
('Ultimate Diamond Facial Lift, Firm, Anti-aging','Skin care'),
('Wedding','Make up'),
('Simple','Make up'),
('Smokey','Make up'),
('gliter','Make up');

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
(1,11,3,'2021-03-30 19:10:25-07','10:00'),
(2,6,2,'2021-03-29 17:10:25-07','11:00'),
(3,5,1,'2021-03-28 15:10:25-07','12:00');

INSERT INTO blogs(name,description,image) VALUES
('why to Add Vitamin E to Your Skin (and Hair) Routine Now','Next to flashier ingredients like retinol and vitamin C, vitamin E is something of an unsung hero. You’ve probably spotted it in at least one of your products, given that it’s one of the most widely used ingredients in beauty (it’s typically listed as “tocopherol” on ingredients lists), but you might not know it does far more than moisturize. From powering your other actives to working its wide-ranging benefits from the inside out, vitamin E does it all—and truly deserves a front-row spot in your skin care lineup. Below, six reasons why this hardworking ingredient is one of our favorite antioxidants (and should be yours, too).','https://cdn.discordapp.com/attachments/778557600017940501/825477578386571274/woman-in-the-sun-feature.png'),
('Things You Didn’t Know About Facial Redness','When it comes to your complexion, seeing red is not always a good thing—especially if you have sensitive skin that reacts from the slightest triggers. While facial redness is one of the most common skin issues to deal with, the whys and hows behind it are often a mystery. So here are some facts about redness to keep in mind the next time your skin is looking flushed.','https://cdn.discordapp.com/attachments/778557600017940501/825478723259072562/2Q.png'),
('Face Cleansers That Work Great on Dry Skin','Of course, dry skin is not a winter-only issue. In fact, dry skin is considered a skin type, and can be caused by genetics, conditions like eczema or psoriasis or simply because “some [people] make less oil to hydrate and seal the skin,” explains Dr. Papri Sarkar, a board-certified dermatologist in Boston. Skin also becomes drier as we age. “Older patients have drier skin because they have an impaired skin barrier layer, produce less oil and have decreased supporting tissues in their skin,” Dr. Sarkar says.','https://cdn.discordapp.com/attachments/778557600017940501/825478504421785680/0220-Blog-Featured-FaceCleansers-V1.png');

INSERT INTO contacts(user_id,name,message) VALUES 
(1,'yasmeen','hello can i contact with the maneger'),
(null,'huda','my wedding is last week can u help me :('),
(3,'noor','do you have  eyeshaow from Dior or top face');
