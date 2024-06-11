var time = 0;
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sprite_0001
		const sprite_0001 = this.add.image(639, 357, "3333");
		sprite_0001.tintTopLeft = 7895160;
		sprite_0001.tintTopRight = 16766455;
		sprite_0001.tintBottomLeft = 7895160;
		sprite_0001.tintBottomRight = 7895160;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(647, 382, 128, 128);
		rectangle_3.scaleX = 12;
		rectangle_3.scaleY = 10;
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 0;
		rectangle_3.fillAlpha = 0.51;

		// tile_1
		const tile_1 = new Tile(this, 40, 100);
		this.add.existing(tile_1);
		tile_1.name = "tile_1";

		// tile_2
		const tile_2 = new Tile(this, 105, 100);
		this.add.existing(tile_2);
		tile_2.name = "tile_2";
		tile_2.angle = 0;

		// tile_4
		const tile_4 = new Tile(this, 235, 100);
		this.add.existing(tile_4);
		tile_4.name = "tile_4";
		tile_4.angle = 0;

		// tile_3
		const tile_3 = new Tile(this, 170, 100);
		this.add.existing(tile_3);
		tile_3.name = "tile_3";

		// tile_5
		const tile_5 = new Tile(this, 300, 100);
		this.add.existing(tile_5);
		tile_5.name = "tile_5";

		// tile_6
		const tile_6 = new Tile(this, 365, 100);
		this.add.existing(tile_6);
		tile_6.name = "tile_6";
		tile_6.angle = 0;

		// tile_7
		const tile_7 = new Tile(this, 430, 100);
		this.add.existing(tile_7);
		tile_7.name = "tile_7";

		// tile_8
		const tile_8 = new Tile(this, 495, 100);
		this.add.existing(tile_8);
		tile_8.name = "tile_8";
		tile_8.angle = 0;

		// tile_9
		const tile_9 = new Tile(this, 560, 100);
		this.add.existing(tile_9);
		tile_9.name = "tile_9";

		// tile_10
		const tile_10 = new Tile(this, 625, 100);
		this.add.existing(tile_10);
		tile_10.name = "tile_10";
		tile_10.angle = 0;

		// tile_11
		const tile_11 = new Tile(this, 690, 100);
		this.add.existing(tile_11);
		tile_11.name = "tile_11";

		// tile_12
		const tile_12 = new Tile(this, 755, 100);
		this.add.existing(tile_12);
		tile_12.name = "tile_12";
		tile_12.angle = 0;

		// tile_13
		const tile_13 = new Tile(this, 820, 100);
		this.add.existing(tile_13);
		tile_13.name = "tile_13";

		// tile_14
		const tile_14 = new Tile(this, 885, 100);
		this.add.existing(tile_14);
		tile_14.name = "tile_14";
		tile_14.angle = 0;

		// tile_15
		const tile_15 = new Tile(this, 40, 165);
		this.add.existing(tile_15);
		tile_15.name = "tile_15";

		// tile_16
		const tile_16 = new Tile(this, 105, 165);
		this.add.existing(tile_16);
		tile_16.name = "tile_16";
		tile_16.angle = 0;

		// tile_17
		const tile_17 = new Tile(this, 170, 165);
		this.add.existing(tile_17);
		tile_17.name = "tile_17";

		// tile_18
		const tile_18 = new Tile(this, 235, 165);
		this.add.existing(tile_18);
		tile_18.name = "tile_18";
		tile_18.angle = 0;

		// tile_28
		const tile_28 = new Tile(this, 885, 165);
		this.add.existing(tile_28);
		tile_28.name = "tile_28";
		tile_28.angle = 0;

		// tile_27
		const tile_27 = new Tile(this, 820, 165);
		this.add.existing(tile_27);
		tile_27.name = "tile_27";

		// tile_25
		const tile_25 = new Tile(this, 690, 165);
		this.add.existing(tile_25);
		tile_25.name = "tile_25";

		// tile_26
		const tile_26 = new Tile(this, 755, 165);
		this.add.existing(tile_26);
		tile_26.name = "tile_26";
		tile_26.angle = 0;

		// tile_24
		const tile_24 = new Tile(this, 625, 165);
		this.add.existing(tile_24);
		tile_24.name = "tile_24";
		tile_24.angle = 0;

		// tile_23
		const tile_23 = new Tile(this, 560, 165);
		this.add.existing(tile_23);
		tile_23.name = "tile_23";

		// tile_19
		const tile_19 = new Tile(this, 300, 165);
		this.add.existing(tile_19);
		tile_19.name = "tile_19";

		// tile_20
		const tile_20 = new Tile(this, 365, 165);
		this.add.existing(tile_20);
		tile_20.name = "tile_20";
		tile_20.angle = 0;

		// tile_22
		const tile_22 = new Tile(this, 495, 165);
		this.add.existing(tile_22);
		tile_22.name = "tile_22";
		tile_22.angle = 0;

		// tile_21
		const tile_21 = new Tile(this, 430, 165);
		this.add.existing(tile_21);
		tile_21.name = "tile_21";

		// tile_43
		const tile_43 = new Tile(this, 40, 295);
		this.add.existing(tile_43);
		tile_43.name = "tile_43";

		// tile_44
		const tile_44 = new Tile(this, 105, 295);
		this.add.existing(tile_44);
		tile_44.name = "tile_44";
		tile_44.angle = 0;

		// tile_42
		const tile_42 = new Tile(this, 885, 230);
		this.add.existing(tile_42);
		tile_42.name = "tile_42";
		tile_42.angle = 0;

		// tile_41
		const tile_41 = new Tile(this, 820, 230);
		this.add.existing(tile_41);
		tile_41.name = "tile_41";

		// tile_46
		const tile_46 = new Tile(this, 235, 295);
		this.add.existing(tile_46);
		tile_46.name = "tile_46";
		tile_46.angle = 0;

		// tile_45
		const tile_45 = new Tile(this, 170, 295);
		this.add.existing(tile_45);
		tile_45.name = "tile_45";

		// tile_49
		const tile_49 = new Tile(this, 430, 295);
		this.add.existing(tile_49);
		tile_49.name = "tile_49";

		// tile_50
		const tile_50 = new Tile(this, 495, 295);
		this.add.existing(tile_50);
		tile_50.name = "tile_50";
		tile_50.angle = 0;

		// tile_39
		const tile_39 = new Tile(this, 690, 230);
		this.add.existing(tile_39);
		tile_39.name = "tile_39";

		// tile_40
		const tile_40 = new Tile(this, 755, 230);
		this.add.existing(tile_40);
		tile_40.name = "tile_40";
		tile_40.angle = 0;

		// tile_38
		const tile_38 = new Tile(this, 625, 230);
		this.add.existing(tile_38);
		tile_38.name = "tile_38";
		tile_38.angle = 0;

		// tile_37
		const tile_37 = new Tile(this, 560, 230);
		this.add.existing(tile_37);
		tile_37.name = "tile_37";

		// tile_33
		const tile_33 = new Tile(this, 300, 230);
		this.add.existing(tile_33);
		tile_33.name = "tile_33";

		// tile_34
		const tile_34 = new Tile(this, 365, 230);
		this.add.existing(tile_34);
		tile_34.name = "tile_34";
		tile_34.angle = 0;

		// tile_36
		const tile_36 = new Tile(this, 495, 230);
		this.add.existing(tile_36);
		tile_36.name = "tile_36";
		tile_36.angle = 0;

		// tile_35
		const tile_35 = new Tile(this, 430, 230);
		this.add.existing(tile_35);
		tile_35.name = "tile_35";

		// tile_48
		const tile_48 = new Tile(this, 365, 295);
		this.add.existing(tile_48);
		tile_48.name = "tile_48";
		tile_48.angle = 0;

		// tile_47
		const tile_47 = new Tile(this, 300, 295);
		this.add.existing(tile_47);
		tile_47.name = "tile_47";

		// tile_51
		const tile_51 = new Tile(this, 560, 295);
		this.add.existing(tile_51);
		tile_51.name = "tile_51";

		// tile_52
		const tile_52 = new Tile(this, 625, 295);
		this.add.existing(tile_52);
		tile_52.name = "tile_52";
		tile_52.angle = 0;

		// tile_54
		const tile_54 = new Tile(this, 755, 295);
		this.add.existing(tile_54);
		tile_54.name = "tile_54";
		tile_54.angle = 0;

		// tile_53
		const tile_53 = new Tile(this, 690, 295);
		this.add.existing(tile_53);
		tile_53.name = "tile_53";

		// tile_55
		const tile_55 = new Tile(this, 820, 295);
		this.add.existing(tile_55);
		tile_55.name = "tile_55";

		// tile_56
		const tile_56 = new Tile(this, 885, 295);
		this.add.existing(tile_56);
		tile_56.name = "tile_56";
		tile_56.angle = 0;

		// tile_31
		const tile_31 = new Tile(this, 170, 230);
		this.add.existing(tile_31);
		tile_31.name = "tile_31";

		// tile_32
		const tile_32 = new Tile(this, 235, 230);
		this.add.existing(tile_32);
		tile_32.name = "tile_32";
		tile_32.angle = 0;

		// tile_30
		const tile_30 = new Tile(this, 105, 230);
		this.add.existing(tile_30);
		tile_30.name = "tile_30";
		tile_30.angle = 0;

		// tile_29
		const tile_29 = new Tile(this, 40, 230);
		this.add.existing(tile_29);
		tile_29.name = "tile_29";

		// tile_71
		const tile_71 = new Tile(this, 40, 425);
		this.add.existing(tile_71);
		tile_71.name = "tile_71";

		// tile_72
		const tile_72 = new Tile(this, 105, 425);
		this.add.existing(tile_72);
		tile_72.name = "tile_72";
		tile_72.angle = 0;

		// tile_70
		const tile_70 = new Tile(this, 885, 360);
		this.add.existing(tile_70);
		tile_70.name = "tile_70";
		tile_70.angle = 0;

		// tile_69
		const tile_69 = new Tile(this, 820, 360);
		this.add.existing(tile_69);
		tile_69.name = "tile_69";

		// tile_74
		const tile_74 = new Tile(this, 235, 425);
		this.add.existing(tile_74);
		tile_74.name = "tile_74";
		tile_74.angle = 0;

		// tile_73
		const tile_73 = new Tile(this, 170, 425);
		this.add.existing(tile_73);
		tile_73.name = "tile_73";

		// tile_77
		const tile_77 = new Tile(this, 430, 425);
		this.add.existing(tile_77);
		tile_77.name = "tile_77";

		// tile_78
		const tile_78 = new Tile(this, 495, 425);
		this.add.existing(tile_78);
		tile_78.name = "tile_78";
		tile_78.angle = 0;

		// tile_67
		const tile_67 = new Tile(this, 690, 360);
		this.add.existing(tile_67);
		tile_67.name = "tile_67";

		// tile_68
		const tile_68 = new Tile(this, 755, 360);
		this.add.existing(tile_68);
		tile_68.name = "tile_68";
		tile_68.angle = 0;

		// tile_66
		const tile_66 = new Tile(this, 625, 360);
		this.add.existing(tile_66);
		tile_66.name = "tile_66";
		tile_66.angle = 0;

		// tile_65
		const tile_65 = new Tile(this, 560, 360);
		this.add.existing(tile_65);
		tile_65.name = "tile_65";

		// tile_61
		const tile_61 = new Tile(this, 300, 360);
		this.add.existing(tile_61);
		tile_61.name = "tile_61";

		// tile_62
		const tile_62 = new Tile(this, 365, 360);
		this.add.existing(tile_62);
		tile_62.name = "tile_62";
		tile_62.angle = 0;

		// tile_64
		const tile_64 = new Tile(this, 495, 360);
		this.add.existing(tile_64);
		tile_64.name = "tile_64";
		tile_64.angle = 0;

		// tile_63
		const tile_63 = new Tile(this, 430, 360);
		this.add.existing(tile_63);
		tile_63.name = "tile_63";

		// tile_76
		const tile_76 = new Tile(this, 365, 425);
		this.add.existing(tile_76);
		tile_76.name = "tile_76";
		tile_76.angle = 0;

		// tile_75
		const tile_75 = new Tile(this, 300, 425);
		this.add.existing(tile_75);
		tile_75.name = "tile_75";

		// tile_79
		const tile_79 = new Tile(this, 560, 425);
		this.add.existing(tile_79);
		tile_79.name = "tile_79";

		// tile_80
		const tile_80 = new Tile(this, 625, 425);
		this.add.existing(tile_80);
		tile_80.name = "tile_80";
		tile_80.angle = 0;

		// tile_82
		const tile_82 = new Tile(this, 755, 425);
		this.add.existing(tile_82);
		tile_82.name = "tile_82";
		tile_82.angle = 0;

		// tile_81
		const tile_81 = new Tile(this, 690, 425);
		this.add.existing(tile_81);
		tile_81.name = "tile_81";

		// tile_83
		const tile_83 = new Tile(this, 820, 425);
		this.add.existing(tile_83);
		tile_83.name = "tile_83";

		// tile_84
		const tile_84 = new Tile(this, 885, 425);
		this.add.existing(tile_84);
		tile_84.name = "tile_84";
		tile_84.angle = 0;

		// tile_59
		const tile_59 = new Tile(this, 170, 360);
		this.add.existing(tile_59);
		tile_59.name = "tile_59";

		// tile_60
		const tile_60 = new Tile(this, 235, 360);
		this.add.existing(tile_60);
		tile_60.name = "tile_60";
		tile_60.angle = 0;

		// tile_58
		const tile_58 = new Tile(this, 105, 360);
		this.add.existing(tile_58);
		tile_58.name = "tile_58";
		tile_58.angle = 0;

		// tile_57
		const tile_57 = new Tile(this, 40, 360);
		this.add.existing(tile_57);
		tile_57.name = "tile_57";

		// tile_89
		const tile_89 = new Tile(this, 300, 490);
		this.add.existing(tile_89);
		tile_89.name = "tile_89";

		// tile_87
		const tile_87 = new Tile(this, 170, 490);
		this.add.existing(tile_87);
		tile_87.name = "tile_87";

		// tile_88
		const tile_88 = new Tile(this, 235, 490);
		this.add.existing(tile_88);
		tile_88.name = "tile_88";
		tile_88.angle = 0;

		// tile_86
		const tile_86 = new Tile(this, 105, 490);
		this.add.existing(tile_86);
		tile_86.name = "tile_86";
		tile_86.angle = 0;

		// tile_85
		const tile_85 = new Tile(this, 40, 490);
		this.add.existing(tile_85);
		tile_85.name = "tile_85";

		// tile_90
		const tile_90 = new Tile(this, 365, 490);
		this.add.existing(tile_90);
		tile_90.name = "tile_90";
		tile_90.angle = 0;

		// tile_91
		const tile_91 = new Tile(this, 430, 490);
		this.add.existing(tile_91);
		tile_91.name = "tile_91";

		// tile_92
		const tile_92 = new Tile(this, 495, 490);
		this.add.existing(tile_92);
		tile_92.name = "tile_92";
		tile_92.angle = 0;

		// tile_93
		const tile_93 = new Tile(this, 560, 490);
		this.add.existing(tile_93);
		tile_93.name = "tile_93";

		// tile_94
		const tile_94 = new Tile(this, 625, 490);
		this.add.existing(tile_94);
		tile_94.name = "tile_94";
		tile_94.angle = 0;

		// tile_95
		const tile_95 = new Tile(this, 690, 490);
		this.add.existing(tile_95);
		tile_95.name = "tile_95";

		// tile_96
		const tile_96 = new Tile(this, 755, 490);
		this.add.existing(tile_96);
		tile_96.name = "tile_96";
		tile_96.angle = 0;

		// tile_97
		const tile_97 = new Tile(this, 820, 490);
		this.add.existing(tile_97);
		tile_97.name = "tile_97";

		// tile_98
		const tile_98 = new Tile(this, 885, 490);
		this.add.existing(tile_98);
		tile_98.name = "tile_98";
		tile_98.angle = 0;

		// tile_99
		const tile_99 = new Tile(this, 40, 555);
		this.add.existing(tile_99);
		tile_99.name = "tile_99";

		// tile_100
		const tile_100 = new Tile(this, 105, 555);
		this.add.existing(tile_100);
		tile_100.name = "tile_100";
		tile_100.angle = 0;

		// tile_101
		const tile_101 = new Tile(this, 170, 555);
		this.add.existing(tile_101);
		tile_101.name = "tile_101";

		// tile_102
		const tile_102 = new Tile(this, 235, 555);
		this.add.existing(tile_102);
		tile_102.name = "tile_102";
		tile_102.angle = 0;

		// tile_103
		const tile_103 = new Tile(this, 300, 555);
		this.add.existing(tile_103);
		tile_103.name = "tile_103";

		// tile_104
		const tile_104 = new Tile(this, 365, 555);
		this.add.existing(tile_104);
		tile_104.name = "tile_104";
		tile_104.angle = 0;

		// tile_105
		const tile_105 = new Tile(this, 430, 555);
		this.add.existing(tile_105);
		tile_105.name = "tile_105";

		// tile_106
		const tile_106 = new Tile(this, 495, 555);
		this.add.existing(tile_106);
		tile_106.name = "tile_106";
		tile_106.angle = 0;

		// tile_107
		const tile_107 = new Tile(this, 560, 555);
		this.add.existing(tile_107);
		tile_107.name = "tile_107";

		// tile_108
		const tile_108 = new Tile(this, 625, 555);
		this.add.existing(tile_108);
		tile_108.name = "tile_108";
		tile_108.angle = 0;

		// tile_109
		const tile_109 = new Tile(this, 690, 555);
		this.add.existing(tile_109);
		tile_109.name = "tile_109";

		// tile_110
		const tile_110 = new Tile(this, 755, 555);
		this.add.existing(tile_110);
		tile_110.name = "tile_110";
		tile_110.angle = 0;

		// tile_111
		const tile_111 = new Tile(this, 820, 555);
		this.add.existing(tile_111);
		tile_111.name = "tile_111";

		// tile_112
		const tile_112 = new Tile(this, 885, 555);
		this.add.existing(tile_112);
		tile_112.name = "tile_112";
		tile_112.angle = 0;

		// tile_113
		const tile_113 = new Tile(this, 40, 620);
		this.add.existing(tile_113);
		tile_113.name = "tile_113";

		// tile_114
		const tile_114 = new Tile(this, 105, 620);
		this.add.existing(tile_114);
		tile_114.name = "tile_114";

		// tile_115
		const tile_115 = new Tile(this, 170, 620);
		this.add.existing(tile_115);
		tile_115.name = "tile_115";

		// tile_116
		const tile_116 = new Tile(this, 235, 620);
		this.add.existing(tile_116);
		tile_116.name = "tile_116";

		// tile_117
		const tile_117 = new Tile(this, 300, 620);
		this.add.existing(tile_117);
		tile_117.name = "tile_117";

		// tile_118
		const tile_118 = new Tile(this, 365, 620);
		this.add.existing(tile_118);
		tile_118.name = "tile_118";

		// tile_119
		const tile_119 = new Tile(this, 430, 620);
		this.add.existing(tile_119);
		tile_119.name = "tile_119";

		// tile_120
		const tile_120 = new Tile(this, 495, 620);
		this.add.existing(tile_120);
		tile_120.name = "tile_120";

		// tile_121
		const tile_121 = new Tile(this, 560, 620);
		this.add.existing(tile_121);
		tile_121.name = "tile_121";

		// tile_122
		const tile_122 = new Tile(this, 625, 620);
		this.add.existing(tile_122);
		tile_122.name = "tile_122";

		// tile_123
		const tile_123 = new Tile(this, 690, 620);
		this.add.existing(tile_123);
		tile_123.name = "tile_123";

		// tile_124
		const tile_124 = new Tile(this, 755, 620);
		this.add.existing(tile_124);
		tile_124.name = "tile_124";

		// tile_125
		const tile_125 = new Tile(this, 820, 620);
		this.add.existing(tile_125);
		tile_125.name = "tile_125";

		// tile_126
		const tile_126 = new Tile(this, 885, 620);
		this.add.existing(tile_126);
		tile_126.name = "tile_126";

		// p1_pf
		const p1_pf = new P1_pf(this, 40, 230);
		this.add.existing(p1_pf);
		p1_pf.visible = true;

		// p2_pf
		const p2_pf = new P2_pf(this, 40, 490);
		this.add.existing(p2_pf);
		p2_pf.scaleX = 0.9;
		p2_pf.scaleY = 0.9;
		p2_pf.visible = true;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(754, 360, 128, 128);
		rectangle_2.scaleX = 2.5;
		rectangle_2.scaleY = 2.5;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 14352384;
		rectangle_2.fillAlpha = 0.2;
		rectangle_2.strokeColor = 16716820;
		rectangle_2.lineWidth = 1.5;

		// earth
		this.add.image(768, 357, "earth");

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1075, 364, 128, 128);
		rectangle_1.scaleX = 2.3;
		rectangle_1.scaleY = 3;
		rectangle_1.fillColor = 1834983;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 1376255;
		rectangle_1.lineWidth = 1.5;

		// meteor_prefab
		const meteor_prefab = new Meteor_prefab(this, 1141, 340);
		this.add.existing(meteor_prefab);
		meteor_prefab.scaleX = 1.2;
		meteor_prefab.scaleY = 1.2;

		// blackHole_prefab
		const blackHole_prefab = new BlackHole_prefab(this, 1010, 250);
		this.add.existing(blackHole_prefab);
		blackHole_prefab.scaleX = 1.2;
		blackHole_prefab.scaleY = 1.2;
		blackHole_prefab.visible = true;

		// cassetteBreak_prefab
		const cassetteBreak_prefab = new CassetteBreak_prefab(this, 1010, 340);
		this.add.existing(cassetteBreak_prefab);
		cassetteBreak_prefab.scaleX = 1.2;
		cassetteBreak_prefab.scaleY = 1.2;
		cassetteBreak_prefab.visible = true;

		// remoteControl_prefab
		const remoteControl_prefab = new RemoteControl_prefab(this, 1072, 430);
		this.add.existing(remoteControl_prefab);
		remoteControl_prefab.scaleX = 1.2;
		remoteControl_prefab.scaleY = 1.2;
		remoteControl_prefab.visible = true;

		// stopSign_prefab
		const stopSign_prefab = new StopSign_prefab(this, 1140, 250);
		this.add.existing(stopSign_prefab);
		stopSign_prefab.scaleX = 1.2;
		stopSign_prefab.scaleY = 1.2;
		stopSign_prefab.visible = true;

		// rectangle
		const rectangle = this.add.rectangle(756, 360, 128, 128);
		rectangle.scaleX = 2.5;
		rectangle.scaleY = 2.5;
		rectangle.fillColor = 1834983;
		rectangle.isStroked = true;
		rectangle.strokeColor = 16716820;
		rectangle.strokeAlpha = 0.7;
		rectangle.lineWidth = 1.5;

		// text_2
		const text_2 = this.add.text(830, 213, "", {});
		text_2.text = "Target";
		text_2.setStyle({ "color": "#ff7e7eff", "fontSize": "20px", "fontStyle": "bold" });

		// leave_match_button
		const leave_match_button = new end_turn_button(this, 1077, 613);
		this.add.existing(leave_match_button);

		// end_turn_button_pf
		const end_turn_button_pf = new End_turn_button_pf(this, 1062, 111);
		this.add.existing(end_turn_button_pf);

		// meteor_hazard_prefab
		const meteor_hazard_prefab = new Meteor_hazard_prefab(this, 233, 231);
		this.add.existing(meteor_hazard_prefab);

		// meteor_hazard_prefab_1
		const meteor_hazard_prefab_1 = new Meteor_hazard_prefab(this, 235, 490);
		this.add.existing(meteor_hazard_prefab_1);

		// meteor_hazard_prefab_4
		const meteor_hazard_prefab_4 = new Meteor_hazard_prefab(this, 563, 489);
		this.add.existing(meteor_hazard_prefab_4);

		// meteor_hazard_prefab_6
		const meteor_hazard_prefab_6 = new Meteor_hazard_prefab(this, 559, 231);
		this.add.existing(meteor_hazard_prefab_6);

		// meteor_hazard_prefab_2
		const meteor_hazard_prefab_2 = new Meteor_hazard_prefab(this, 299, 360);
		this.add.existing(meteor_hazard_prefab_2);

		// lists
		const list_tile = [tile_121, tile_122, tile_124, tile_123, tile_126, tile_125, tile_118, tile_117, tile_120, tile_119, tile_116, tile_115, tile_114, tile_113, tile_85, tile_86, tile_88, tile_87, tile_112, tile_111, tile_109, tile_110, tile_108, tile_107, tile_103, tile_104, tile_91, tile_92, tile_90, tile_89, tile_93, tile_94, tile_96, tile_95, tile_106, tile_105, tile_101, tile_102, tile_97, tile_98, tile_100, tile_99, tile_57, tile_58, tile_60, tile_59, tile_84, tile_83, tile_81, tile_82, tile_80, tile_79, tile_75, tile_76, tile_63, tile_64, tile_62, tile_61, tile_65, tile_66, tile_68, tile_67, tile_78, tile_77, tile_73, tile_74, tile_69, tile_70, tile_72, tile_71, tile_29, tile_30, tile_32, tile_31, tile_56, tile_55, tile_53, tile_54, tile_52, tile_51, tile_47, tile_48, tile_35, tile_36, tile_34, tile_33, tile_37, tile_38, tile_40, tile_39, tile_50, tile_49, tile_45, tile_46, tile_41, tile_42, tile_44, tile_43, tile_15, tile_16, tile_14, tile_13, tile_18, tile_17, tile_21, tile_22, tile_11, tile_12, tile_10, tile_9, tile_5, tile_6, tile_8, tile_7, tile_20, tile_19, tile_23, tile_24, tile_26, tile_25, tile_27, tile_28, tile_3, tile_4, tile_2, tile_1];

		// tile_1 (prefab fields)
		tile_1.tile_id = 1;

		// tile_2 (prefab fields)
		tile_2.tile_id = 2;

		// tile_4 (prefab fields)
		tile_4.tile_id = 4;

		// tile_3 (prefab fields)
		tile_3.tile_id = 3;

		// tile_5 (prefab fields)
		tile_5.tile_id = 5;

		// tile_6 (prefab fields)
		tile_6.tile_id = 6;

		// tile_7 (prefab fields)
		tile_7.tile_id = 7;

		// tile_8 (prefab fields)
		tile_8.tile_id = 8;

		// tile_9 (prefab fields)
		tile_9.tile_id = 9;

		// tile_10 (prefab fields)
		tile_10.tile_id = 10;

		// tile_11 (prefab fields)
		tile_11.tile_id = 11;

		// tile_12 (prefab fields)
		tile_12.tile_id = 12;

		// tile_13 (prefab fields)
		tile_13.tile_id = 13;

		// tile_14 (prefab fields)
		tile_14.tile_id = 14;

		// tile_15 (prefab fields)
		tile_15.tile_id = 15;

		// tile_16 (prefab fields)
		tile_16.tile_id = 16;

		// tile_17 (prefab fields)
		tile_17.tile_id = 17;

		// tile_18 (prefab fields)
		tile_18.tile_id = 18;

		// tile_28 (prefab fields)
		tile_28.tile_id = 28;

		// tile_27 (prefab fields)
		tile_27.tile_id = 27;

		// tile_25 (prefab fields)
		tile_25.tile_id = 25;

		// tile_26 (prefab fields)
		tile_26.tile_id = 26;

		// tile_24 (prefab fields)
		tile_24.tile_id = 24;

		// tile_23 (prefab fields)
		tile_23.tile_id = 23;

		// tile_19 (prefab fields)
		tile_19.tile_id = 19;

		// tile_20 (prefab fields)
		tile_20.tile_id = 20;

		// tile_22 (prefab fields)
		tile_22.tile_id = 22;

		// tile_21 (prefab fields)
		tile_21.tile_id = 21;

		// tile_43 (prefab fields)
		tile_43.tile_id = 43;

		// tile_44 (prefab fields)
		tile_44.tile_id = 44;

		// tile_42 (prefab fields)
		tile_42.tile_id = 42;
		tile_42.isitwin = true;

		// tile_41 (prefab fields)
		tile_41.tile_id = 41;
		tile_41.isitwin = true;

		// tile_46 (prefab fields)
		tile_46.tile_id = 46;

		// tile_45 (prefab fields)
		tile_45.tile_id = 45;

		// tile_49 (prefab fields)
		tile_49.tile_id = 49;

		// tile_50 (prefab fields)
		tile_50.tile_id = 50;

		// tile_39 (prefab fields)
		tile_39.tile_id = 39;
		tile_39.isitwin = true;

		// tile_40 (prefab fields)
		tile_40.tile_id = 40;
		tile_40.isitwin = true;

		// tile_38 (prefab fields)
		tile_38.tile_id = 38;
		tile_38.isitwin = true;

		// tile_37 (prefab fields)
		tile_37.tile_id = 37;
		tile_37.isitwin = false;

		// tile_33 (prefab fields)
		tile_33.tile_id = 33;

		// tile_34 (prefab fields)
		tile_34.tile_id = 34;

		// tile_36 (prefab fields)
		tile_36.tile_id = 36;

		// tile_35 (prefab fields)
		tile_35.tile_id = 35;

		// tile_48 (prefab fields)
		tile_48.tile_id = 48;

		// tile_47 (prefab fields)
		tile_47.tile_id = 47;

		// tile_51 (prefab fields)
		tile_51.tile_id = 51;

		// tile_52 (prefab fields)
		tile_52.tile_id = 52;
		tile_52.isitwin = true;

		// tile_54 (prefab fields)
		tile_54.tile_id = 54;
		tile_54.isitwin = true;

		// tile_53 (prefab fields)
		tile_53.tile_id = 53;
		tile_53.isitwin = true;

		// tile_55 (prefab fields)
		tile_55.tile_id = 55;
		tile_55.isitwin = true;

		// tile_56 (prefab fields)
		tile_56.tile_id = 56;
		tile_56.isitwin = true;

		// tile_31 (prefab fields)
		tile_31.tile_id = 31;

		// tile_32 (prefab fields)
		tile_32.tile_id = 32;

		// tile_30 (prefab fields)
		tile_30.tile_id = 30;

		// tile_29 (prefab fields)
		tile_29.tile_id = 29;

		// tile_71 (prefab fields)
		tile_71.tile_id = 71;

		// tile_72 (prefab fields)
		tile_72.tile_id = 72;

		// tile_70 (prefab fields)
		tile_70.tile_id = 70;
		tile_70.isitwin = true;

		// tile_69 (prefab fields)
		tile_69.tile_id = 69;
		tile_69.isitwin = true;

		// tile_74 (prefab fields)
		tile_74.tile_id = 74;

		// tile_73 (prefab fields)
		tile_73.tile_id = 73;

		// tile_77 (prefab fields)
		tile_77.tile_id = 77;

		// tile_78 (prefab fields)
		tile_78.tile_id = 78;

		// tile_67 (prefab fields)
		tile_67.tile_id = 67;
		tile_67.isitwin = true;

		// tile_68 (prefab fields)
		tile_68.tile_id = 68;

		// tile_66 (prefab fields)
		tile_66.tile_id = 66;
		tile_66.isitwin = true;

		// tile_65 (prefab fields)
		tile_65.tile_id = 65;

		// tile_61 (prefab fields)
		tile_61.tile_id = 61;

		// tile_62 (prefab fields)
		tile_62.tile_id = 62;

		// tile_64 (prefab fields)
		tile_64.tile_id = 64;

		// tile_63 (prefab fields)
		tile_63.tile_id = 63;

		// tile_76 (prefab fields)
		tile_76.tile_id = 76;

		// tile_75 (prefab fields)
		tile_75.tile_id = 75;

		// tile_79 (prefab fields)
		tile_79.tile_id = 79;

		// tile_80 (prefab fields)
		tile_80.tile_id = 80;
		tile_80.isitwin = true;

		// tile_82 (prefab fields)
		tile_82.tile_id = 82;
		tile_82.isitwin = true;

		// tile_81 (prefab fields)
		tile_81.tile_id = 81;
		tile_81.isitwin = true;

		// tile_83 (prefab fields)
		tile_83.tile_id = 83;

		// tile_84 (prefab fields)
		tile_84.tile_id = 84;
		tile_84.isitwin = true;

		// tile_59 (prefab fields)
		tile_59.tile_id = 59;

		// tile_60 (prefab fields)
		tile_60.tile_id = 60;

		// tile_58 (prefab fields)
		tile_58.tile_id = 58;

		// tile_57 (prefab fields)
		tile_57.tile_id = 57;

		// tile_89 (prefab fields)
		tile_89.tile_id = 89;

		// tile_87 (prefab fields)
		tile_87.tile_id = 87;

		// tile_88 (prefab fields)
		tile_88.tile_id = 88;

		// tile_86 (prefab fields)
		tile_86.tile_id = 86;

		// tile_85 (prefab fields)
		tile_85.tile_id = 85;

		// tile_90 (prefab fields)
		tile_90.tile_id = 90;

		// tile_91 (prefab fields)
		tile_91.tile_id = 91;

		// tile_92 (prefab fields)
		tile_92.tile_id = 92;

		// tile_93 (prefab fields)
		tile_93.tile_id = 93;

		// tile_94 (prefab fields)
		tile_94.tile_id = 94;
		tile_94.isitwin = true;

		// tile_95 (prefab fields)
		tile_95.tile_id = 95;
		tile_95.isitwin = true;

		// tile_96 (prefab fields)
		tile_96.tile_id = 96;
		tile_96.isitwin = true;

		// tile_97 (prefab fields)
		tile_97.tile_id = 97;
		tile_97.isitwin = true;

		// tile_98 (prefab fields)
		tile_98.tile_id = 98;
		tile_98.isitwin = true;

		// tile_99 (prefab fields)
		tile_99.tile_id = 99;

		// tile_100 (prefab fields)
		tile_100.tile_id = 100;

		// tile_101 (prefab fields)
		tile_101.tile_id = 101;

		// tile_102 (prefab fields)
		tile_102.tile_id = 102;

		// tile_103 (prefab fields)
		tile_103.tile_id = 103;

		// tile_104 (prefab fields)
		tile_104.tile_id = 104;

		// tile_105 (prefab fields)
		tile_105.tile_id = 105;

		// tile_106 (prefab fields)
		tile_106.tile_id = 106;

		// tile_107 (prefab fields)
		tile_107.tile_id = 107;

		// tile_108 (prefab fields)
		tile_108.tile_id = 108;

		// tile_109 (prefab fields)
		tile_109.tile_id = 109;

		// tile_110 (prefab fields)
		tile_110.tile_id = 110;

		// tile_111 (prefab fields)
		tile_111.tile_id = 111;

		// tile_112 (prefab fields)
		tile_112.tile_id = 112;

		// tile_113 (prefab fields)
		tile_113.tile_id = 113;

		// tile_114 (prefab fields)
		tile_114.tile_id = 114;

		// tile_115 (prefab fields)
		tile_115.tile_id = 115;

		// tile_116 (prefab fields)
		tile_116.tile_id = 116;

		// tile_117 (prefab fields)
		tile_117.tile_id = 117;

		// tile_118 (prefab fields)
		tile_118.tile_id = 118;

		// tile_119 (prefab fields)
		tile_119.tile_id = 119;

		// tile_120 (prefab fields)
		tile_120.tile_id = 120;

		// tile_121 (prefab fields)
		tile_121.tile_id = 121;

		// tile_122 (prefab fields)
		tile_122.tile_id = 122;

		// tile_123 (prefab fields)
		tile_123.tile_id = 123;

		// tile_124 (prefab fields)
		tile_124.tile_id = 124;

		// tile_125 (prefab fields)
		tile_125.tile_id = 125;

		// tile_126 (prefab fields)
		tile_126.tile_id = 126;

		this.tile_1 = tile_1;
		this.tile_2 = tile_2;
		this.tile_4 = tile_4;
		this.tile_3 = tile_3;
		this.tile_5 = tile_5;
		this.tile_6 = tile_6;
		this.tile_7 = tile_7;
		this.tile_8 = tile_8;
		this.tile_9 = tile_9;
		this.tile_10 = tile_10;
		this.tile_11 = tile_11;
		this.tile_12 = tile_12;
		this.tile_13 = tile_13;
		this.tile_14 = tile_14;
		this.tile_15 = tile_15;
		this.tile_16 = tile_16;
		this.tile_17 = tile_17;
		this.tile_18 = tile_18;
		this.tile_28 = tile_28;
		this.tile_27 = tile_27;
		this.tile_25 = tile_25;
		this.tile_26 = tile_26;
		this.tile_24 = tile_24;
		this.tile_23 = tile_23;
		this.tile_19 = tile_19;
		this.tile_20 = tile_20;
		this.tile_22 = tile_22;
		this.tile_21 = tile_21;
		this.tile_43 = tile_43;
		this.tile_44 = tile_44;
		this.tile_42 = tile_42;
		this.tile_41 = tile_41;
		this.tile_46 = tile_46;
		this.tile_45 = tile_45;
		this.tile_49 = tile_49;
		this.tile_50 = tile_50;
		this.tile_39 = tile_39;
		this.tile_40 = tile_40;
		this.tile_38 = tile_38;
		this.tile_37 = tile_37;
		this.tile_33 = tile_33;
		this.tile_34 = tile_34;
		this.tile_36 = tile_36;
		this.tile_35 = tile_35;
		this.tile_48 = tile_48;
		this.tile_47 = tile_47;
		this.tile_51 = tile_51;
		this.tile_52 = tile_52;
		this.tile_54 = tile_54;
		this.tile_53 = tile_53;
		this.tile_55 = tile_55;
		this.tile_56 = tile_56;
		this.tile_31 = tile_31;
		this.tile_32 = tile_32;
		this.tile_30 = tile_30;
		this.tile_29 = tile_29;
		this.tile_71 = tile_71;
		this.tile_72 = tile_72;
		this.tile_70 = tile_70;
		this.tile_69 = tile_69;
		this.tile_74 = tile_74;
		this.tile_73 = tile_73;
		this.tile_77 = tile_77;
		this.tile_78 = tile_78;
		this.tile_67 = tile_67;
		this.tile_68 = tile_68;
		this.tile_66 = tile_66;
		this.tile_65 = tile_65;
		this.tile_61 = tile_61;
		this.tile_62 = tile_62;
		this.tile_64 = tile_64;
		this.tile_63 = tile_63;
		this.tile_76 = tile_76;
		this.tile_75 = tile_75;
		this.tile_79 = tile_79;
		this.tile_80 = tile_80;
		this.tile_82 = tile_82;
		this.tile_81 = tile_81;
		this.tile_83 = tile_83;
		this.tile_84 = tile_84;
		this.tile_59 = tile_59;
		this.tile_60 = tile_60;
		this.tile_58 = tile_58;
		this.tile_57 = tile_57;
		this.tile_89 = tile_89;
		this.tile_87 = tile_87;
		this.tile_88 = tile_88;
		this.tile_86 = tile_86;
		this.tile_85 = tile_85;
		this.tile_90 = tile_90;
		this.tile_91 = tile_91;
		this.tile_92 = tile_92;
		this.tile_93 = tile_93;
		this.tile_94 = tile_94;
		this.tile_95 = tile_95;
		this.tile_96 = tile_96;
		this.tile_97 = tile_97;
		this.tile_98 = tile_98;
		this.tile_99 = tile_99;
		this.tile_100 = tile_100;
		this.tile_101 = tile_101;
		this.tile_102 = tile_102;
		this.tile_103 = tile_103;
		this.tile_104 = tile_104;
		this.tile_105 = tile_105;
		this.tile_106 = tile_106;
		this.tile_107 = tile_107;
		this.tile_108 = tile_108;
		this.tile_109 = tile_109;
		this.tile_110 = tile_110;
		this.tile_111 = tile_111;
		this.tile_112 = tile_112;
		this.tile_113 = tile_113;
		this.tile_114 = tile_114;
		this.tile_115 = tile_115;
		this.tile_116 = tile_116;
		this.tile_117 = tile_117;
		this.tile_118 = tile_118;
		this.tile_119 = tile_119;
		this.tile_120 = tile_120;
		this.tile_121 = tile_121;
		this.tile_122 = tile_122;
		this.tile_123 = tile_123;
		this.tile_124 = tile_124;
		this.tile_125 = tile_125;
		this.tile_126 = tile_126;
		this.p1_pf = p1_pf;
		this.p2_pf = p2_pf;
		this.meteor_prefab = meteor_prefab;
		this.blackHole_prefab = blackHole_prefab;
		this.cassetteBreak_prefab = cassetteBreak_prefab;
		this.remoteControl_prefab = remoteControl_prefab;
		this.stopSign_prefab = stopSign_prefab;
		this.leave_match_button = leave_match_button;
		this.end_turn_button_pf = end_turn_button_pf;
		this.list_tile = list_tile;

		this.events.emit("scene-awake");
	}

	/** @type {Tile} */
	tile_1;
	/** @type {Tile} */
	tile_2;
	/** @type {Tile} */
	tile_4;
	/** @type {Tile} */
	tile_3;
	/** @type {Tile} */
	tile_5;
	/** @type {Tile} */
	tile_6;
	/** @type {Tile} */
	tile_7;
	/** @type {Tile} */
	tile_8;
	/** @type {Tile} */
	tile_9;
	/** @type {Tile} */
	tile_10;
	/** @type {Tile} */
	tile_11;
	/** @type {Tile} */
	tile_12;
	/** @type {Tile} */
	tile_13;
	/** @type {Tile} */
	tile_14;
	/** @type {Tile} */
	tile_15;
	/** @type {Tile} */
	tile_16;
	/** @type {Tile} */
	tile_17;
	/** @type {Tile} */
	tile_18;
	/** @type {Tile} */
	tile_28;
	/** @type {Tile} */
	tile_27;
	/** @type {Tile} */
	tile_25;
	/** @type {Tile} */
	tile_26;
	/** @type {Tile} */
	tile_24;
	/** @type {Tile} */
	tile_23;
	/** @type {Tile} */
	tile_19;
	/** @type {Tile} */
	tile_20;
	/** @type {Tile} */
	tile_22;
	/** @type {Tile} */
	tile_21;
	/** @type {Tile} */
	tile_43;
	/** @type {Tile} */
	tile_44;
	/** @type {Tile} */
	tile_42;
	/** @type {Tile} */
	tile_41;
	/** @type {Tile} */
	tile_46;
	/** @type {Tile} */
	tile_45;
	/** @type {Tile} */
	tile_49;
	/** @type {Tile} */
	tile_50;
	/** @type {Tile} */
	tile_39;
	/** @type {Tile} */
	tile_40;
	/** @type {Tile} */
	tile_38;
	/** @type {Tile} */
	tile_37;
	/** @type {Tile} */
	tile_33;
	/** @type {Tile} */
	tile_34;
	/** @type {Tile} */
	tile_36;
	/** @type {Tile} */
	tile_35;
	/** @type {Tile} */
	tile_48;
	/** @type {Tile} */
	tile_47;
	/** @type {Tile} */
	tile_51;
	/** @type {Tile} */
	tile_52;
	/** @type {Tile} */
	tile_54;
	/** @type {Tile} */
	tile_53;
	/** @type {Tile} */
	tile_55;
	/** @type {Tile} */
	tile_56;
	/** @type {Tile} */
	tile_31;
	/** @type {Tile} */
	tile_32;
	/** @type {Tile} */
	tile_30;
	/** @type {Tile} */
	tile_29;
	/** @type {Tile} */
	tile_71;
	/** @type {Tile} */
	tile_72;
	/** @type {Tile} */
	tile_70;
	/** @type {Tile} */
	tile_69;
	/** @type {Tile} */
	tile_74;
	/** @type {Tile} */
	tile_73;
	/** @type {Tile} */
	tile_77;
	/** @type {Tile} */
	tile_78;
	/** @type {Tile} */
	tile_67;
	/** @type {Tile} */
	tile_68;
	/** @type {Tile} */
	tile_66;
	/** @type {Tile} */
	tile_65;
	/** @type {Tile} */
	tile_61;
	/** @type {Tile} */
	tile_62;
	/** @type {Tile} */
	tile_64;
	/** @type {Tile} */
	tile_63;
	/** @type {Tile} */
	tile_76;
	/** @type {Tile} */
	tile_75;
	/** @type {Tile} */
	tile_79;
	/** @type {Tile} */
	tile_80;
	/** @type {Tile} */
	tile_82;
	/** @type {Tile} */
	tile_81;
	/** @type {Tile} */
	tile_83;
	/** @type {Tile} */
	tile_84;
	/** @type {Tile} */
	tile_59;
	/** @type {Tile} */
	tile_60;
	/** @type {Tile} */
	tile_58;
	/** @type {Tile} */
	tile_57;
	/** @type {Tile} */
	tile_89;
	/** @type {Tile} */
	tile_87;
	/** @type {Tile} */
	tile_88;
	/** @type {Tile} */
	tile_86;
	/** @type {Tile} */
	tile_85;
	/** @type {Tile} */
	tile_90;
	/** @type {Tile} */
	tile_91;
	/** @type {Tile} */
	tile_92;
	/** @type {Tile} */
	tile_93;
	/** @type {Tile} */
	tile_94;
	/** @type {Tile} */
	tile_95;
	/** @type {Tile} */
	tile_96;
	/** @type {Tile} */
	tile_97;
	/** @type {Tile} */
	tile_98;
	/** @type {Tile} */
	tile_99;
	/** @type {Tile} */
	tile_100;
	/** @type {Tile} */
	tile_101;
	/** @type {Tile} */
	tile_102;
	/** @type {Tile} */
	tile_103;
	/** @type {Tile} */
	tile_104;
	/** @type {Tile} */
	tile_105;
	/** @type {Tile} */
	tile_106;
	/** @type {Tile} */
	tile_107;
	/** @type {Tile} */
	tile_108;
	/** @type {Tile} */
	tile_109;
	/** @type {Tile} */
	tile_110;
	/** @type {Tile} */
	tile_111;
	/** @type {Tile} */
	tile_112;
	/** @type {Tile} */
	tile_113;
	/** @type {Tile} */
	tile_114;
	/** @type {Tile} */
	tile_115;
	/** @type {Tile} */
	tile_116;
	/** @type {Tile} */
	tile_117;
	/** @type {Tile} */
	tile_118;
	/** @type {Tile} */
	tile_119;
	/** @type {Tile} */
	tile_120;
	/** @type {Tile} */
	tile_121;
	/** @type {Tile} */
	tile_122;
	/** @type {Tile} */
	tile_123;
	/** @type {Tile} */
	tile_124;
	/** @type {Tile} */
	tile_125;
	/** @type {Tile} */
	tile_126;
	/** @type {P1_pf} */
	p1_pf;
	/** @type {P2_pf} */
	p2_pf;
	/** @type {Meteor_prefab} */
	meteor_prefab;
	/** @type {BlackHole_prefab} */
	blackHole_prefab;
	/** @type {CassetteBreak_prefab} */
	cassetteBreak_prefab;
	/** @type {RemoteControl_prefab} */
	remoteControl_prefab;
	/** @type {StopSign_prefab} */
	stopSign_prefab;
	/** @type {end_turn_button} */
	leave_match_button;
	/** @type {End_turn_button_pf} */
	end_turn_button_pf;
	/** @type {Tile[]} */
	list_tile;

	/* START-USER-CODE */
	cassette = null;

	// Write your code here

	create() {
		this.editorCreate();
		// this.meteorSound = this.sound.add('meteorSound', { volume: 0.5 });
		console.log('editor created');
		setInterval(()=>{
			this.getPlayersPositions();
		},5000);

		this.list_tile.forEach((tile)=> {
			tile.on('pointerdown', ()=>{
				console.log(tile.tile_id)
				// this.spawnCassette(tile)
				if (this.cassette == null)
					this.move(tile.tile_id)
				else
					{this.placeCassette(tile.tile_id);
						this.spawnCassette(tile);
					}

			})

			tile.on('pointerover', () =>{
				tile.setTint(0xcd03ff)
			})

			tile.on('pointerout', () =>{
				tile.setTint(0xffffff)
			})
		});


/////////////////////////////////////////////////////////////////////
this.meteor_prefab.setInteractive();
this.meteor_prefab.on('pointerover', () => {
    this.tweens.add({
        targets: this.meteor_prefab,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.meteor_prefab.on('pointerout', () => {
    this.tweens.add({
        targets: this.meteor_prefab,                        // METEOR CASSETTE BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });
});
this.meteor_prefab.on('pointerdown', () => {
	if (this.cassette != null) {
		console.log("Deselecting meteor cassette");
		this.cassette = null;
		this.meteor_prefab.setTint(0xffffff);
	}
	else {
		console.log("Selecting meteor cassette");
		this.cassette = "meteor";
		this.meteor_prefab.setTint(0x6effe2); 
	}
})

this.meteor_prefab.on('pointerup', ()=> {
this.meteor_prefab.setTint(0xffffff); 
console.log('meteor unpushed');
});
//////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////
this.blackHole_prefab.setInteractive();
this.blackHole_prefab.on('pointerover', () => {
    this.tweens.add({
        targets: this.blackHole_prefab,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.blackHole_prefab.on('pointerout', () => {
    this.tweens.add({
        targets: this.blackHole_prefab,                            // BLACK_HOLE CASSETTE BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });
});
this.blackHole_prefab.on('pointerdown', () => {
console.log('black_hole pushed')


if (this.cassette != null) {
	console.log("Deselecting meteor cassette");
	this.cassette = null;
	this.meteor_prefab.setTint(0xffffff);
}

this.blackHole_prefab.setTint(0x6effe2); 
})
this.blackHole_prefab.on('pointerup', ()=> {
this.blackHole_prefab.setTint(0xffffff); 
console.log('black_hole unpushed');
});
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
this.stopSign_prefab.setInteractive();
this.stopSign_prefab.on('pointerover', () => {
    this.tweens.add({
        targets: this.stopSign_prefab,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.stopSign_prefab.on('pointerout', () => {
    this.tweens.add({
        targets: this.stopSign_prefab,                            // STOP_SIGN CASSETTE BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });
});
this.stopSign_prefab.on('pointerdown', () => {
if (this.cassette != null) {
	console.log("Deselecting meteor cassette");
	this.cassette = null;
	this.meteor_prefab.setTint(0xffffff);
}
this.stopSign_prefab.setTint(0x6effe2); 
})
this.stopSign_prefab.on('pointerup', ()=> {
this.stopSign_prefab.setTint(0xffffff); 
console.log('stop_sign unpushed');
});
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
this.cassetteBreak_prefab.setInteractive();
this.cassetteBreak_prefab.on('pointerover', () => {
    this.tweens.add({
        targets: this.cassetteBreak_prefab,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.cassetteBreak_prefab.on('pointerout', () => {
    this.tweens.add({
        targets: this.cassetteBreak_prefab,                             // CASSETTE_BREAK CASSETTE BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });
});
this.cassetteBreak_prefab.on('pointerdown', () => {
	if (this.cassette != null) {
		console.log("Deselecting meteor cassette");
		this.cassette = null;
		this.meteor_prefab.setTint(0xffffff);
	}
this.cassetteBreak_prefab.setTint(0x6effe2); 
})
this.cassetteBreak_prefab.on('pointerup', ()=> {
this.cassetteBreak_prefab.setTint(0xffffff); 
console.log('cassette_break unpushed');
});
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
this.remoteControl_prefab.setInteractive();
this.remoteControl_prefab.on('pointerover', () => {
    this.tweens.add({
        targets: this.remoteControl_prefab,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.remoteControl_prefab.on('pointerout', () => {
    this.tweens.add({
        targets: this.remoteControl_prefab,                               // REMOTE_CONTROL CASSETTE BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });
});
this.remoteControl_prefab.on('pointerdown', () => {
	if (this.cassette != null) {
		console.log("Deselecting meteor cassette");
		this.cassette = null;
		this.meteor_prefab.setTint(0xffffff);
	}
this.remoteControl_prefab.setTint(0x6effe2); 
})
this.remoteControl_prefab.on('pointerup', ()=> {
this.remoteControl_prefab.setTint(0xffffff); 
console.log('remote_control unpushed');
});
//////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
this.leave_match_button.setInteractive();
this.leave_match_button.on('pointerover', () => {
	this.leave_match_button.setTint(0xda45ff); 

    this.tweens.add({
        targets: this.leave_match_button,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.leave_match_button.on('pointerout', () => {

	this.leave_match_button.setTint(0xffffff); 


    this.tweens.add({
        targets: this.leave_match_button,                               // LEAVE MATCH BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });

});
this.leave_match_button.on('pointerdown', () => {
	this.lobby();
console.log('remote_control pushed')
this.leave_match_button.setTint(0xff7300); 
})
this.leave_match_button.on('pointerup', ()=> {
this.leave_match_button.setTint(0xffffff); 
console.log('remote_control unpushed');
});
//////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////

this.end_turn_button_pf.setInteractive();
this.end_turn_button_pf.on('pointerover', () => {
	this.end_turn_button_pf.setTint(0xda45ff); 

    this.tweens.add({
        targets: this.end_turn_button_pf,
        scale: 1.2,
        duration: 300,
        ease: 'Power2'
    });
});
this.end_turn_button_pf.on('pointerout', () => {

	this.end_turn_button_pf.setTint(0xffffff); 


    this.tweens.add({
        targets: this.end_turn_button_pf,                               //  END TURN BUTTON
        scale: 1,
        duration: 300,
        ease: 'Power2'
    });

});


this.end_turn_button_pf.on('pointerdown', () => {
	this.EndTurn();
console.log('endTurn pushed');
this.end_turn_button_pf.setTint(0xff7300); 
})
this.end_turn_button_pf.on('pointerup', ()=> {
this.end_turn_button_pf.setTint(0xffffff); 

});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
		this.getPlayersPositions()
		this.p1_pf.setInteractive();
		this.p1_pf.on('pointerover', () => {
			this.p1_pf.setTint(0x0fefff); 

			this.tweens.add({
				targets: this.p1_pf,
				scale: 1.2,
				duration: 300,
				ease: 'Power2'
			});
		});
		this.p1_pf.on('pointerout', () => {
			this.p1_pf.setTint(0xffffff); 
			this.tweens.add({
				targets: this.p1_pf,                               //  PLAYER 1 INTERACTIVE EFFECTS
				scale: 1,
				duration: 300,
				ease: 'Power2'
			});

		});
		this.p1_pf.on('pointerdown', () => {
			if (this.p1_pf.playerOwner)
				console.log('you can move the ship!')
			else
				console.log('nonono you cant move this.')
		})
/////////////////////////////////////////////////////////////////

		this.p2_pf.setInteractive();
		this.p2_pf.on('pointerover', () => {
			this.p2_pf.setTint(0x0fefff); 

			this.tweens.add({
				targets: this.p2_pf,
				scale: 1.2,
				duration: 300,
				ease: 'Power2'
			});
		});
		this.p2_pf.on('pointerout', () => {
			this.p2_pf.setTint(0xffffff); 
			this.tweens.add({
				targets: this.p2_pf,                               //  PLAYER 2 INTERACTIVE EFFECTS
				scale: 1,
				duration: 300,
				ease: 'Power2'
			});

		});
		this.p2_pf.on('pointerdown', () => {
			if (this.p2_pf.playerOwner)
				console.log('you can move the ship!')
			else
				console.log('nonono you cant move this.')
		})
	}


	




///////////////////////FUNCTIONS////////////////FUNCTIONS///////////////FUNCTIONS////////////


	getPlayersPositions() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var jsonData = JSON.parse(xhttp.responseText);
				var tileID = jsonData.tile_id
				this.winState();
				this.list_tile.sort(function (a, b) {
					if (a.name < b.name) {
					  return -1;
					}
					if (a.name > b.name) {
					  return 1;
					}
					return 0;
				  });

				  console.log(jsonData)
				  console.log(this.p1_pf.playerOwner)
				this.p1_pf.playerOwner = jsonData.player1Ownership ? 1 : 0
				console.log(this.p1_pf.playerOwner)
				console.log(this.p2_pf.playerOwner)
				this.p2_pf.playerOwner = jsonData.player2Ownership ? 1 : 0
				console.log(this.p2_pf.playerOwner)

				this.list_tile.forEach((tile) => {
					if (tile.name == 'tile_' + jsonData.player1Data.tile_id) {
						console.log('updating ship 1 position to ' +tile.x + '~' + tile.y)
						this.p1_pf.x = tile.x
						this.p1_pf.y = tile.y
					}
					if (tile.name == 'tile_' + jsonData.player2Data.tile_id) {
						console.log('updating ship 2 position to ' +tile.x + '~' + tile.y)
						this.p2_pf.x = tile.x
						this.p2_pf.y = tile.y
					}
					// if (this.p1_pf.x || this.p2_pf.x > 624){
					// 	alert("You win! congrats.")
					// } else {
					// 	console.log("Win state = 0")
					// };
				})

				var tile = document.getElementById(jsonData);
				// console.log(current_tile)
			}
		};
		xhttp.open("GET", "/getPlayerPositions", true);
		xhttp.send();
	}
	getPlayerPosition(playerID){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var jsonData = JSON.parse(xhttp.responseText);
				var tileID = jsonData.tile_id

				this.list_tile.sort(function (a, b) {
					if (a.name < b.name) {
					  return -1;
					}
					if (a.name > b.name) {
					  return 1;
					}
					return 0;
				  });

				var tile = this.list_tile[tileID - 1]
				  // if this is NOT the local player, then disable setInteractive as false

				console.log(tile,playerID)
				this.p1_pf.x = tile.x
				this.p1_pf.y = tile.y
				// var tile = document.getElementById(jsonData);
				// console.log(current_tile)
			}
		};
		xhttp.open("GET", "/tile_id_data", true);
		xhttp.send();

	}
	placeCassette(tile_id) {
		// We need the cassette type (cassette_id?)
		console.log("Placing cassette on tile " + tile_id)

		var player_cassette_id = 1

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText)

				// this.getPlayerPosition(playerID);
			}																	//Move Function
		};

		var data = {
			"player_cassette_id": player_cassette_id,
			"tile_id": tile_id
		};
		var jsonData = JSON.stringify(data);
		console.log(jsonData);

		xhttp.open("POST", "/useCassette/UseHazardCassette");
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(jsonData);
	};
	move(tile_id) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log(this.responseText)
			if (this.readyState == 4 && this.status == 200) {
				this.getPlayerPosition(playerID);
				console.log(tile_id)
			}																	//Move Function
		};
		var data = {
			"tile_id": tile_id,
		};

		var jsonData = JSON.stringify(data);
		xhttp.open("POST", "/movement/movement");
		xhttp.setRequestHeader("Content-Type", "application/json");
		console.log(jsonData);
		xhttp.send(jsonData);
	};
	lobby(){
		window.location.replace('/mainPage.html');
	};
	win(){
	if(tile.isitwin = true){
		alert("Congratulations! You have won the game!");
	}
	};
	 getMatchId() {
		const urlParams = new URLSearchParams(window.location.search);
		const matchId = urlParams.get('match_id');
		if (matchId) {
			console.log('Match ID:', matchId);
		} else {
			console.error('No match_id found in URL');
		}
	};
	 getMatchIdAndEndTurn() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var matchId = JSON.parse(this.responseText)[0].id; 
				this.EndTurn(matchId);
			} else if (this.readyState == 4) {
				console.error("Failed to get match id with status: " + this.status);
			}
		};

		xhttp.open("GET", "/matches", true);
		xhttp.send();
	};
	 EndTurn() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					console.log("Request successful");
				} else {
					console.error("Request failed with status: " + this.responseText);
				}
			}
		};

		xhttp.open("PUT", "/endturn/endturn", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		var data = {
			"match_id": 1, //num is doesnt
			               //matter just send smth here 
		};
		var jsonData = JSON.stringify(data);
		xhttp.send(jsonData); 
	};
	spawnCassette(tile){
		console.log('spawning_meteor...')
		const meteor_prefab = new Meteor_hazard_prefab(this, tile.x, tile.y);
		this.add.existing(meteor_prefab);
		
	}
	winState(tileID){
		if (this.p1_pf.x > 624 || this.p2_pf>624 ){
			alert("Congratulations! You have won the game!");
			window.location.replace('/mainPage.html');
		} else {'its not win yet'}
	}
///////////////////////FUNCTIONS////////////////FUNCTIONS///////////////FUNCTIONS////////////

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
