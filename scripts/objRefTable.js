const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.Sin,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{фон: 0},
	{Твёрдый: 0},
	{стена: 0},
	{сыр: 0},
	{сыыыр: 0},
	{"8Направлений": 0},
	{СледитьЗа: 0},
	{мышка: 0},
	{Якорь: 0},
	{счёт: 0},
	{тон: 0},
	{Синусоида: 0},
	{котик: 0},
	{хп: 0},
	{проигрыш: 0},
	{ИГРАТЬ: 0},
	{Аудио: 0},
	{ВЫЙГРЫШ: 0},
	{да: 0},
	{очки: 0}
];

self.InstanceType = {
	фон: class extends self.ITiledBackgroundInstance {},
	стена: class extends self.ISpriteInstance {},
	сыр: class extends self.ISpriteInstance {},
	сыыыр: class extends self.ISpriteInstance {},
	мышка: class extends self.ISpriteInstance {},
	счёт: class extends self.ITextInstance {},
	тон: class extends self.ISpriteInstance {},
	котик: class extends self.ISpriteInstance {},
	хп: class extends self.ITiledBackgroundInstance {},
	проигрыш: class extends self.ITextInstance {},
	ИГРАТЬ: class extends self.IButtonInstance {},
	Аудио: class extends self.IInstance {},
	ВЫЙГРЫШ: class extends self.ITextInstance {},
	да: class extends self.ITextInstance {}
}