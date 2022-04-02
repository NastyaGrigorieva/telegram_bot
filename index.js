const {Telegraf, Scenes, Markup, session} = require('telegraf');

const token = "5146027314:AAFrPEYKj_Q_DiwPaX4RgyesN_Zhwb4G78Y"
const bot = new Telegraf(token)
//
// const stage = new Scenes.Stage([1,2,3,4,5,6,7,8,9])
// bot.use(session())
// bot.use(stage.middleware())

// bot.hears('h1',ctx=>ctx.reply('Hello'))
//
// bot.on('massage', msg => {
//     const text = msg.text;
//     const chatId = msg.chat.id;
//
//     if (text ==='/start')
// bot.sendMessage(chatId, 'Привет ${text}')
// })
// //



bot.hears('кнопка 1', ctx => ctx.scene.enter('1'))
bot.hears('кнопка 2', ctx => ctx.scene.enter('2'))
bot.hears('кнопка 3', ctx => ctx.scene.enter('3'))
bot.hears('кнопка 4', ctx => ctx.scene.enter('4'))
bot.hears('кнопка 5', ctx => ctx.scene.enter('5'))
bot.hears('кнопка 6', ctx => ctx.scene.enter('6'))
bot.hears('кнопка 7', ctx => ctx.scene.enter('7'))
bot.hears('кнопка 8', ctx => ctx.scene.enter('8'))
bot.hears('кнопка 9', ctx => ctx.scene.enter('9'))

bot.start(async (ctx) => {
    try {
        await ctx.reply('Выберите кнопку', Markup.keyboard([
            ['кнопка 1', 'кнопка 2', 'кнопка 3'],
            ['кнопка 4', 'кнопка 5', 'кнопка 6'],
            ['кнопка 7', 'кнопка 8', 'кнопка 9'],

        ]).oneTime().resize())
    } catch (err) {
        console.log(err)
    }
})


bot.launch()