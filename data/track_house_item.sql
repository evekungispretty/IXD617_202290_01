-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2022 年 12 月 12 日 14:51
-- 伺服器版本： 5.7.39-cll-lve
-- PHP 版本： 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `eve_kung_store`
--

-- --------------------------------------------------------

--
-- 資料表結構 `track_house_item`
--

CREATE TABLE `track_house_item` (
  `id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `floor` varchar(64) NOT NULL,
  `description` text CHARACTER SET hp8 NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL,
  `lat` decimal(8,6) NOT NULL,
  `lng` decimal(9,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `track_house_item`
--

INSERT INTO `track_house_item` (`id`, `user_id`, `name`, `type`, `floor`, `description`, `img`, `date_create`, `lat`, `lng`) VALUES
(1, 7, 'Chester', 'Mission Revival', '3', 'Ha ow ohonov menbah jeh gafemsi ufesazid zimmurhis bopzat wirron ewjad banwi an opiomid mo.', 'https://via.placeholder.com/432x400/B68/fff/?text=Mission Revival', '2022-06-29 10:34:17', '37.779120', '-122.433340'),
(2, 6, 'William', 'Queen Anne', '4', 'Gizam awcarke resukiilo si vimopu dugsomla seluzciv ne gasej repatuh teb zapdabani juwnabas koij.', 'https://via.placeholder.com/461x353/645/fff/?text=Queen Anne', '2021-02-13 21:03:12', '37.710410', '-122.375770'),
(3, 1, 'Barry', 'Gothic Revival', '1', 'Ufoakapi tosula zeljip ozwo we gejri hulov lib ak ikiap hatroz sekan wikonid diajhu.', 'https://via.placeholder.com/491x401/796/fff/?text=Gothic Revival', '2020-10-22 04:25:51', '37.723600', '-122.497900'),
(4, 1, 'Lucy', 'Tudor Revival', '4', 'Non lesihdow jegij cuduh woeto ef we limrapban esloki geedaf ho jav.', 'https://via.placeholder.com/382x361/995/fff/?text=Tudor Revival', '2022-07-21 06:51:31', '37.726890', '-122.443220'),
(5, 8, 'Fannie', 'Gothic Revival', '2', 'Fiz kun vi rihnif nitoar we jejikup licwani la nigwom boimmih ciefe jewpapa nedud.', 'https://via.placeholder.com/406x564/637/fff/?text=Gothic Revival', '2021-06-10 04:28:47', '37.682900', '-122.499770'),
(6, 7, 'Emilie', 'Gothic Revival', '2', 'Fudeet on tarilgaf ce ifaawa ametasan ajpazu ulawo cedewni selzap lucloszo gar.', 'https://via.placeholder.com/597x485/A57/fff/?text=Gothic Revival', '2020-10-19 17:42:18', '37.685930', '-122.398740'),
(7, 2, 'Myrtle', 'Queen Anne', '5 or more', 'Da fivleek heivu rav kefom wi onkop awvo ihogehe zar wiwof job ja.', 'https://via.placeholder.com/558x457/454/fff/?text=Queen Anne', '2020-04-16 02:03:13', '37.785250', '-122.488450'),
(8, 5, 'Eva', 'Gothic Revival', '2', 'Talud ur zizukate te zazwunof tapapo urremijo emuhow foneli aso awgas ilza cawi ituni aze vofun.', 'https://via.placeholder.com/366x516/763/fff/?text=Gothic Revival', '2022-01-24 06:27:47', '37.749980', '-122.375830'),
(9, 5, 'Tony', 'Rousseau Homes', '2', 'Ohurhug zebessil ho muazu ope jagerfo ewa lufolmuf vodfa egerohoc ca je jipod san ibalo fisih ba pe.', 'https://via.placeholder.com/448x403/947/fff/?text=Rousseau Homes', '2020-11-08 21:55:19', '37.753580', '-122.386750'),
(10, 2, 'Pearl', 'Mission Revival', '3', 'Muzkevboj uwi bujbuma ekuon zabjo ukkobej wi ultut deih fe dafelte wuuwuizi amoondep wuwidi wuvukde noikha rehuk sovudwi.', 'https://via.placeholder.com/355x526/5A7/fff/?text=Mission Revival', '2022-06-15 20:47:44', '37.741500', '-122.411800'),
(11, 1, 'Raymond', 'Mission Revival', '5 or more', 'Tiw eva pakeh dekfiw dohme lesahkid lududog pedfew niefu sa zobwag wiwliha.', 'https://via.placeholder.com/387x495/786/fff/?text=Mission Revival', '2021-11-07 06:42:19', '37.706140', '-122.453910'),
(12, 1, 'Iva', 'Rousseau Homes', '5 or more', 'Iprise zovibi habeneb piokiir inevaw mace neplib pawe ni ija becaha bu iv.', 'https://via.placeholder.com/573x506/978/fff/?text=Rousseau Homes', '2020-11-11 02:25:30', '37.697740', '-122.442750'),
(13, 9, 'Della', 'Queen Anne', '2', 'Ban wa itu sa ewuha efi uwlap beh hafvocu sefbuvbab giomu nu dunezga ut.', 'https://via.placeholder.com/533x567/36A/fff/?text=Queen Anne', '2022-03-31 13:16:45', '37.772100', '-122.378710'),
(14, 9, 'Della', 'Queen Anne', '3', 'Map du op mi gubazuj zod dudla itiweje romizu ile fuek oguhezag kunohit ene ru zepo terjal ese.', 'https://via.placeholder.com/532x351/4B6/fff/?text=Queen Anne', '2021-04-25 12:43:09', '37.684380', '-122.454780'),
(15, 4, 'Luella', 'Rousseau Homes', '5 or more', 'Nejmul humaalo rem powejfuf va neb ohe hoeghu jegok sebmazfe impocog negaglu lapow huk kihorohu jeimin rodasce no.', 'https://via.placeholder.com/434x444/388/fff/?text=Rousseau Homes', '2020-01-03 11:40:58', '37.745920', '-122.489050'),
(16, 3, 'Lillie', 'Gothic Revival', '1', 'Ovu ru gudoaf neh kuf wodomik rupzeme ma hek lalral fawvem bizevjiw iji abelor.', 'https://via.placeholder.com/398x489/567/fff/?text=Gothic Revival', '2021-01-11 14:16:58', '37.729370', '-122.441900'),
(17, 5, 'Alma', 'Gothic Revival', '5 or more', 'Fahuwen vehnafo obuda nef tubrun awuuholid tuhdamtin po poeg juza powpiase ir juposuk cekobej tafuzo nehav.', 'https://via.placeholder.com/591x401/396/fff/?text=Gothic Revival', '2022-04-13 10:21:27', '37.734050', '-122.431380'),
(18, 5, 'Florence', 'Mission Revival', '4', 'Dejej ekjob ojowoef midied fabin bu oli cucuof co toruru wilemowov hohez luju mouj humjug.', 'https://via.placeholder.com/504x470/848/fff/?text=Mission Revival', '2022-10-21 21:59:55', '37.699240', '-122.467580'),
(19, 3, 'Alta', 'Rousseau Homes', '5 or more', 'Fuphilim go ciwo torkototu micowe mideneku mah ugiekta lozjid faklunav pug oh ratig coeno wusjo zazzege donmol hamor.', 'https://via.placeholder.com/535x451/486/fff/?text=Rousseau Homes', '2022-06-12 14:59:03', '37.712360', '-122.404840'),
(20, 1, 'Jimmy', 'Tudor Revival', '4', 'Umfurkil pir pe kesjirun vawaen coze oztaew aleimo kulgal wog hif ze vode wavup eteleman.', 'https://via.placeholder.com/504x395/987/fff/?text=Tudor Revival', '2020-08-13 10:56:38', '37.775050', '-122.387480'),
(21, 7, 'Troy', 'Rousseau Homes', '4', 'Zafomfe otahitka mujti zezzamma ag ojecic dohalipa ba pugha dahze gevo nilo cev tu go.', 'https://via.placeholder.com/590x438/945/fff/?text=Rousseau Homes', '2020-06-11 03:16:47', '37.769510', '-122.405300'),
(22, 6, 'Cecelia', 'Mission Revival', '5 or more', 'Gijjifrul tifra evohitmem fomunho ror vepose carki rud ingum razgulsu hal co otukak souzu idi.', 'https://via.placeholder.com/388x585/743/fff/?text=Mission Revival', '2022-05-28 10:38:44', '37.744700', '-122.413970'),
(23, 5, 'Willie', 'Mission Revival', '2', 'Pibhuhlen gebkub ek fuwlolfe fukec piffo ziba nu wavevco borgido wibbi fispiog jav nod zione.', 'https://via.placeholder.com/503x586/648/fff/?text=Mission Revival', '2020-06-28 02:14:53', '37.764470', '-122.436030'),
(24, 8, 'Owen', 'Tudor Revival', '2', 'Wutcal idoson da jij enuvadi wifosfe lufwaoj se ka edsec son nemciclaj liwmihaz ifi jope ukdo.', 'https://via.placeholder.com/551x592/865/fff/?text=Tudor Revival', '2021-05-25 10:22:31', '37.722760', '-122.453010'),
(25, 2, 'Gregory', 'Queen Anne', '2', 'Jul jihasaw sevejum fi vanala coagzol lufohpe mevurtu tizo tajiduc belim tousosiv esazab ro nih naweja.', 'https://via.placeholder.com/461x418/836/fff/?text=Queen Anne', '2021-07-25 20:00:30', '37.764460', '-122.432480'),
(26, 1, 'Emma', 'Queen Anne', '5 or more', 'Sil mirahiw fesso ved keg raw wedub eclo up ba sewa kikasug iw pihvekage rujfe.', 'https://via.placeholder.com/595x400/BBB/fff/?text=Queen Anne', '2022-08-27 08:55:07', '37.747030', '-122.476100'),
(27, 8, 'Leila', 'Queen Anne', '2', 'Nut ote ejuluton gitmuce ni rep icwi loghuv ab if ibuebagov ki paen co pafko osoonuiz ticeuga mo.', 'https://via.placeholder.com/527x572/53B/fff/?text=Queen Anne', '2021-08-17 15:22:47', '37.755820', '-122.394380'),
(28, 5, 'Kate', 'Gothic Revival', '1', 'Derkem dacuine bibed cujepzih wi ac ojuru sub hafluked fawif sujahuw ev.', 'https://via.placeholder.com/390x399/B97/fff/?text=Gothic Revival', '2020-05-14 17:24:54', '37.789120', '-122.466880'),
(29, 6, 'Lewis', 'Mission Revival', '2', 'Mussapud kiul disco zidciwfam ulupan tok ewuf re fennu hup sekic jafun.', 'https://via.placeholder.com/492x443/934/fff/?text=Mission Revival', '2020-02-27 04:07:17', '37.778250', '-122.486930'),
(30, 7, 'Jane', 'Queen Anne', '5 or more', 'Dut zaujiusa hip ja zauge filcorcug luz moszinro es ra ra colla cuh etiha.', 'https://via.placeholder.com/439x437/B6B/fff/?text=Queen Anne', '2020-01-11 22:19:03', '37.754630', '-122.420330'),
(31, 5, 'Mathilda', 'Rousseau Homes', '4', 'Nug hiefavu bapi igvosi bemavuk se zetod me zu ibboca ri zohve lofarbob siwuw hietifev.', 'https://via.placeholder.com/496x555/75A/fff/?text=Rousseau Homes', '2020-05-01 07:57:54', '37.724250', '-122.435260'),
(32, 5, 'Mattie', 'Queen Anne', '1', 'Lawma iwil howzet up nudfinnu nojeg ces faj fopdad orsoh nejco ame gic ahi je do hiveoku.', 'https://via.placeholder.com/516x350/549/fff/?text=Queen Anne', '2020-07-26 09:57:13', '37.693640', '-122.483220'),
(33, 3, 'Madge', 'Queen Anne', '1', 'Ni lu gojgurda noj afusuja ihehead vekuvsa famja ri muwnup bep mafupvun.', 'https://via.placeholder.com/433x407/B64/fff/?text=Queen Anne', '2020-03-19 12:41:14', '37.707600', '-122.498430'),
(34, 8, 'Leonard', 'Rousseau Homes', '3', 'Viji li togic veb wuahe avulam mah zon fer ka bobaj mekaja lauli gil bu zoagohi zinleuf.', 'https://via.placeholder.com/393x474/8B8/fff/?text=Rousseau Homes', '2021-11-25 06:51:19', '37.769460', '-122.399540'),
(35, 9, 'Brett', 'Rousseau Homes', '3', 'Hutasote zowbodhep po lenpuva hahfo ruc mafuh tenucub fokpu towilavo go sibwonpe vej eblogen guhu ap kivogec.', 'https://via.placeholder.com/420x559/54A/fff/?text=Rousseau Homes', '2021-12-08 18:41:08', '37.674740', '-122.445000'),
(36, 5, 'Bess', 'Rousseau Homes', '1', 'Taob kagwubwi ca fu dutev ku abice nifu binep pelhemman niwem gum mag wibwiftud otaso ere he here.', 'https://via.placeholder.com/551x399/674/fff/?text=Rousseau Homes', '2022-06-07 10:35:08', '37.729930', '-122.416090'),
(37, 6, 'Darrell', 'Mission Revival', '2', 'Luhi cutakvi woshosoh reshu ipwev ibluha douri papgu biule jegab cusvob gawwadna raf letdi.', 'https://via.placeholder.com/405x592/766/fff/?text=Mission Revival', '2020-06-12 11:37:52', '37.759050', '-122.408070'),
(38, 10, 'Dustin', 'Mission Revival', '5 or more', 'Opuse uk cod fochaira jerihola pavfuzva ovne gije cunvuzwom lodkah urnig timajis nowbalu jo.', 'https://via.placeholder.com/450x549/387/fff/?text=Mission Revival', '2022-11-09 04:05:47', '37.722300', '-122.481910'),
(39, 7, 'Polly', 'Rousseau Homes', '3', 'Onacag me ji cu ebu cot ke tuhwiina vajgar hubu laj jofderat cerulha jovtergus zedemiba gaccazup avu.', 'https://via.placeholder.com/539x474/967/fff/?text=Rousseau Homes', '2022-11-05 18:06:24', '37.682560', '-122.466970'),
(40, 7, 'Bettie', 'Queen Anne', '4', 'Fa malmef fabot opwe umpah tem de coiz ta vi sofruw eb abulijoj bevuvez ot sew doujru.', 'https://via.placeholder.com/479x493/4B7/fff/?text=Queen Anne', '2020-02-18 07:19:06', '37.706740', '-122.486990'),
(41, 9, 'Paul', 'Mission Revival', '5 or more', 'Ecajakas zucafooga safzaztal aj bef cuigoaj hemaj jucifu cemkiwaha muf biwnulpet mi zu.', 'https://via.placeholder.com/424x362/77B/fff/?text=Mission Revival', '2020-05-03 13:55:42', '37.673110', '-122.461450'),
(42, 3, 'Lloyd', 'Queen Anne', '3', 'Zawna bow kul unu cosne pag vowesoco wekkenso vedovpo co il pichede.', 'https://via.placeholder.com/425x388/534/fff/?text=Queen Anne', '2022-02-07 15:27:08', '37.765860', '-122.414970'),
(43, 6, 'Amy', 'Mission Revival', '1', 'Potke bigvooje atefvuh fewulo id ede ji unejehuk zeptakze sekojil avumpe vezhiz izama bozuc mevcecez ju ho azuma.', 'https://via.placeholder.com/500x440/478/fff/?text=Mission Revival', '2021-02-14 02:24:00', '37.769640', '-122.484450'),
(44, 4, 'Cory', 'Rousseau Homes', '5 or more', 'Kan jevalhat jafefi hud vic ha fafniha unuicu kutapec veshaz kohwe ef fazkugiv latifo pecog nafre.', 'https://via.placeholder.com/526x578/ABB/fff/?text=Rousseau Homes', '2021-08-01 11:12:03', '37.705430', '-122.457840'),
(45, 3, 'Martha', 'Tudor Revival', '1', 'Vu zipoj muejifed ev hongegib icuzewfu jefe tid bowvow heplin mipoc juka fujvik ozu inkup mocilo bisig sumoz.', 'https://via.placeholder.com/512x370/378/fff/?text=Tudor Revival', '2020-12-05 00:07:55', '37.781650', '-122.480260'),
(46, 8, 'Mildred', 'Gothic Revival', '5 or more', 'Fansaz davir as ov fup paj dizla bonu arevoktus zozome nimwihe olofip heus ja ku coj agurugo.', 'https://via.placeholder.com/594x450/953/fff/?text=Gothic Revival', '2021-08-28 07:12:25', '37.737370', '-122.389280'),
(47, 10, 'Bessie', 'Queen Anne', '3', 'Natut sari jacu jetraug uvle mugpifuh tajic ab mog limlonjo laruewi vacruftod wo igpib fifrem ewle mecujbew kosoc.', 'https://via.placeholder.com/550x578/854/fff/?text=Queen Anne', '2020-11-02 16:51:21', '37.777400', '-122.431260'),
(48, 1, 'Ida', 'Gothic Revival', '2', 'Epaodlu degfaj peb fu zevjor locoba kudida gakutlef rozpag ula vomliuz declantup vumehaz eb nar.', 'https://via.placeholder.com/500x413/B95/fff/?text=Gothic Revival', '2022-10-12 01:49:49', '37.786330', '-122.452890'),
(49, 9, 'Adam', 'Tudor Revival', '2', 'Mik nagak ewidep rotonson kiogah foswuad voge juza wo lacpivni fekkir zoba binav.', 'https://via.placeholder.com/457x418/459/fff/?text=Tudor Revival', '2021-07-08 08:34:31', '37.721590', '-122.464390'),
(50, 4, 'Hilda', 'Rousseau Homes', '5 or more', 'Mo sihu tab kulcictet vatkoro butaw dutduzis linezugu weca gu se ijilo keh docifipel sowdi kuchan da iwiwehi.', 'https://via.placeholder.com/460x518/A79/fff/?text=Rousseau Homes', '2020-11-22 21:24:18', '37.707860', '-122.402920'),
(94, 3, 'www', 'www', '12', 'weee', 'https://via.placeholder.com/400/?text=ANIMAL', '2022-11-27 20:22:20', '0.000000', '0.000000'),
(95, 0, '', '', '', '', '', '0000-00-00 00:00:00', '37.805192', '-122.428919'),
(98, 3, '33', '33', '3', '333', 'https://via.placeholder.com/400/?text=ANIMAL', '2022-11-27 21:40:38', '37.710819', '-122.449456'),
(102, 13, 'qqq', 'qq', 'ww', 'w', 'upload/1670295315.0214_05.jpg', '2022-12-05 16:46:47', '37.749851', '-122.477911'),
(103, 14, '11', 'Queen Anne', '1111', '22', 'upload/1670288321.157_1212.JPG', '2022-12-05 17:55:29', '37.784825', '-122.431641'),
(105, 14, 'kkk', 'Queen Anne', '3', 'mmmm', 'upload/1670288621.1564_1212.JPG', '2022-12-05 18:03:48', '37.777551', '-122.439904'),
(106, 13, '11', 'Queen Anne', '1', 'yay', 'upload/1670302238.8754_02.jpg', '2022-12-05 21:51:58', '37.699298', '-122.476334'),
(107, 15, 'House near Sloat ', 'Rousseau Homes', '2', 'Cute!!', 'upload/1670349850.9391_01.jpg', '2022-12-05 23:49:53', '37.733618', '-122.494174'),
(109, 15, 'Cute House!', 'Queen Anne', '2', 'I drove by and saw this cute pink house on a Saturday ', 'upload/1670349522.4029_04.jpg', '2022-12-06 10:58:45', '37.739784', '-122.495851'),
(110, 15, 'House near my place', 'Rousseau Homes', '2', '', 'upload/1670350321.0255_06.jpg', '2022-12-06 11:12:04', '37.753231', '-122.500452'),
(111, 15, 'House on Judah', 'Rousseau Homes', '2', 'It looks a bit orange on iphone camera but I swear it\'s pink lol', 'upload/1670350658.9594_08.jpg', '2022-12-06 11:18:16', '37.759422', '-122.502425'),
(114, 15, 'Near Alamo Square!', 'Queen Anne', '2', '', 'upload/1670544409.2943_010.JPG', '2022-12-08 17:06:52', '37.777644', '-122.432713'),
(115, 15, 'Richmond house', 'Shingle Style', '3', 'a very special one', 'upload/1670544468.217_09.JPG', '2022-12-08 17:08:23', '37.780876', '-122.465973'),
(116, 15, 'A cutie near Castro', 'Gothic Revival', '2', '?', 'upload/1670544541.9555_012.JPG', '2022-12-08 17:09:23', '37.757081', '-122.432856'),
(117, 15, 'House #100', 'Shingle Style', '2', 'A house I stumble upon doing my errands!', 'upload/1670544611.4528_011.JPG', '2022-12-08 17:10:55', '37.760112', '-122.482580'),
(118, 1, '', 'null', '', '', '', '2022-12-09 16:13:29', '37.740550', '-122.409961'),
(119, 16, 'dsa', 'Queen Anne', '2', 'dsa', '', '2022-12-10 05:15:33', '37.746205', '-122.431986'),
(120, 19, '123', 'Queen Anne', '78', '8765', '', '2022-12-10 08:16:23', '0.000000', '0.000000');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `track_house_item`
--
ALTER TABLE `track_house_item`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `track_house_item`
--
ALTER TABLE `track_house_item`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
