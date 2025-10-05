// 题目数据
const testData = [
    {
        title: '创造力（创新能力）维度',
        questions: [
            { text: '在日常工作中，我会主动思考现有工作流程的优化方法', type: 'frequency', weight: 1 },
            { text: '当面对新任务时，我倾向于尝试全新的解决思路而非沿用旧方法', type: 'frequency', weight: 1 },
            { text: '我认为自己能频繁提出具有新颖性且可落地的工作方案', type: 'frequency', weight: 1 },
            { text: '在团队头脑风暴中，我通常能贡献较多独特的想法', type: 'frequency', weight: 1 },
            { text: '我乐于接受打破常规的工作挑战，并能从中探索创新点', type: 'degree', weight: 1 },
            { text: '我会定期关注行业内的创新案例，并思考如何借鉴到自身工作中', type: 'frequency', weight: 1 },
            { text: '当工作结果未达预期时，我会从创新角度寻找改进方向', type: 'degree', weight: 1 },
            { text: '我能够在现有知识和经验基础上，创造出全新的工作工具或方法', type: 'frequency', weight: 1 },
            { text: '我认为创新思维是提升工作效率和质量的关键因素', type: 'degree', weight: 1 },
            { text: '在跨部门协作中，我能结合不同部门的特点提出创新性的合作模式', type: 'frequency', weight: 1 },
            { text: '我会主动参与公司内部的创新项目或活动', type: 'frequency', weight: 1 },
            { text: '面对复杂问题时，我能跳出固有思维框架，找到创新性的解决方案', type: 'degree', weight: 1 }
        ]
    },
    {
        title: '技术能力（专业能力与学习能力）维度',
        questions: [
            { text: '我能熟练运用岗位所需的专业软件和工具完成工作任务', type: 'frequency', weight: 1 },
            { text: '当行业内出现新的专业技术或知识时，我会在一个月内主动学习了解', type: 'frequency', weight: 1 },
            { text: '我能独立解决工作中遇到的大部分专业技术难题', type: 'frequency', weight: 1 },
            { text: '我会制定系统的学习计划，定期提升自身专业能力', type: 'degree', weight: 1 },
            { text: '在工作中，我能准确判断自身专业知识的薄弱环节并及时弥补', type: 'frequency', weight: 1 },
            { text: '我能够快速掌握新的工作技能，并应用到实际工作中', type: 'frequency', weight: 1 },
            { text: '我会主动阅读专业相关的书籍、期刊或文献', type: 'frequency', weight: 1 },
            { text: '面对超出自身现有专业能力的任务，我能通过学习在规定时间内达到完成任务的能力要求', type: 'degree', weight: 1 },
            { text: '我能为团队成员提供专业技术方面的指导和帮助', type: 'frequency', weight: 1 },
            { text: '我会关注行业技术发展趋势，提前学习相关知识以适应未来工作需求', type: 'frequency', weight: 1 },
            { text: '我能通过实践不断总结经验，提升专业技能水平', type: 'degree', weight: 1 },
            { text: '我能顺利通过公司组织的专业能力考核', type: 'frequency', weight: 1 },
            { text: '当遇到新的专业概念时，我能快速理解并融入到自身知识体系中', type: 'frequency', weight: 1 }
        ]
    },
    {
        title: '任务理解与解决能力（服从性与理解能力）维度',
        questions: [
            { text: '领导布置任务后，我能在 5 分钟内准确理解任务目标和要求', type: 'frequency', weight: 1 },
            { text: '我会严格按照领导的指示和要求完成工作任务', type: 'degree', weight: 1 },
            { text: '当对任务要求存在疑问时，我会及时与领导沟通确认', type: 'frequency', weight: 1 },
            { text: '我能准确把握任务的重点和难点，并优先处理关键部分', type: 'frequency', weight: 1 },
            { text: '即使任务内容与个人兴趣不符，我也会认真完成', type: 'degree', weight: 1 },
            { text: '在任务执行过程中，若领导调整任务要求，我能快速调整工作方向', type: 'frequency', weight: 1 },
            { text: '我能理解任务背后的深层目的，并以此为导向开展工作', type: 'degree', weight: 1 },
            { text: '面对复杂任务，我能通过与他人沟通进一步明确任务细节', type: 'frequency', weight: 1 },
            { text: '我会按时按质完成领导交办的各项任务', type: 'frequency', weight: 1 },
            { text: '当任务执行遇到困难时，我会首先从自身找原因并解决，而非抱怨任务难度', type: 'degree', weight: 1 },
            { text: '我能根据任务的紧急程度和重要程度，合理安排工作顺序', type: 'frequency', weight: 1 }
        ]
    },
    {
        title: '社交应变能力维度',
        questions: [
            { text: '在陌生的社交场合，我能在 10 分钟内与他人建立初步的良好沟通', type: 'frequency', weight: 1 },
            { text: '当与他人意见产生分歧时，我能冷静倾听并找到双方的共识点', type: 'degree', weight: 1 },
            { text: '我能快速适应不同类型人群的沟通方式', type: 'frequency', weight: 1 },
            { text: '在商务谈判中，我能根据对方的反应及时调整谈判策略', type: 'frequency', weight: 1 },
            { text: '当遇到突发的社交冲突时，我能在短时间内想出妥善的解决办法', type: 'degree', weight: 1 },
            { text: '我能与不同部门、不同岗位的同事保持良好的合作关系', type: 'frequency', weight: 1 },
            { text: '在与客户沟通时，我能准确把握客户需求并给予恰当回应', type: 'frequency', weight: 1 },
            { text: '我善于利用社交场合拓展人脉资源', type: 'degree', weight: 1 },
            { text: '当他人情绪不佳时，我能敏锐察觉并给予适当的安慰或支持', type: 'frequency', weight: 1 },
            { text: '在跨文化交流中，我能尊重不同文化习惯并顺利开展沟通', type: 'degree', weight: 1 }
        ]
    },
    {
        title: '问题拆解能力（逻辑性与规划性）维度',
        questions: [
            { text: '面对复杂问题时，我能在 30 分钟内将其拆解为若干个可解决的小问题', type: 'frequency', weight: 1 },
            { text: '我会按照逻辑顺序分析问题的各个环节，找出问题的根源', type: 'degree', weight: 1 },
            { text: '在解决问题前，我会制定详细的行动计划，明确每个步骤的目标和时间节点', type: 'frequency', weight: 1 },
            { text: '我能根据问题的优先级，合理安排解决问题的顺序', type: 'frequency', weight: 1 },
            { text: '当计划执行过程中出现偏差时，我能快速分析原因并调整计划', type: 'degree', weight: 1 },
            { text: '我能清晰地向他人阐述问题的拆解过程和解决思路', type: 'frequency', weight: 1 },
            { text: '在制定计划时，我会充分考虑可能出现的风险并制定应对措施', type: 'frequency', weight: 1 },
            { text: '我能通过逻辑推理，预测问题解决过程中可能遇到的困难', type: 'degree', weight: 1 },
            { text: '对于长期项目，我会将其分解为多个阶段，每个阶段设定明确的里程碑', type: 'frequency', weight: 1 },
            { text: '我能根据问题的性质，选择合适的分析工具和方法进行问题拆解', type: 'frequency', weight: 1 },
            { text: '在团队解决问题时，我能引导团队成员按照逻辑顺序开展讨论', type: 'degree', weight: 1 },
            { text: '我会定期回顾问题解决过程和计划执行情况，总结经验教训', type: 'frequency', weight: 1 }
        ]
    }
];

// 选项类型和对应分数
const optionScores = {
    frequency: { A: 4, B: 3, C: 2, D: 1 },
    degree: { A: 5, B: 4, C: 3, D: 2, E: 1 }
};

// 维度权重
const dimensionWeights = [0.2, 0.25, 0.2, 0.15, 0.2];

// 维度满分
const dimensionMaxScores = testData.map(module => 
    module.questions.reduce((sum, q) => sum + (q.type === 'frequency' ? 4 : 5) * q.weight, 0)
);

// 当前模块索引
let currentModuleIndex = 0;
// 存储用户答案
const userAnswers = testData.map(() => []);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-test').addEventListener('click', startTest);
});

function startTest() {
    document.getElementById('home').style.display = 'none';
    const testContainer = document.getElementById('test-container');
    testContainer.style.display = 'block';
    renderModule(currentModuleIndex);
}

function renderModule(index) {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = '';

    const module = testData[index];
    const moduleDiv = document.createElement('div');
    moduleDiv.className = 'module';
    moduleDiv.innerHTML = `<h2>${module.title}</h2>`;

    module.questions.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${qIndex + 1}. ${question.text}</p>`;

        const options = question.type === 'frequency' 
            ? ['A、总是', 'B、经常', 'C、偶尔', 'D、从不']
            : ['A、非常同意', 'B、比较同意', 'C、一般', 'D、比较不同意', 'E、非常不同意'];

        options.forEach(option => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `module${index}q${qIndex}`;
            input.value = option[0];
            if (userAnswers[index][qIndex] === option[0]) {
                input.checked = true;
            }

            const label = document.createElement('label');
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option}`));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        moduleDiv.appendChild(questionDiv);
    });

    const buttonDiv = document.createElement('div');

    if (index > 0) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '返回上一模块';
        prevButton.addEventListener('click', () => goToModule(index - 1));
        buttonDiv.appendChild(prevButton);
    }

    if (index < testData.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = '进入下一模块';
        nextButton.disabled = !isModuleCompleted(index);
        nextButton.addEventListener('click', () => goToModule(index + 1));
        buttonDiv.appendChild(nextButton);
    } else {
        const submitButton = document.createElement('button');
        submitButton.textContent = '提交答案';
        submitButton.disabled = !isModuleCompleted(index);
        submitButton.addEventListener('click', calculateResults);
        buttonDiv.appendChild(submitButton);
    }

    moduleDiv.appendChild(buttonDiv);
    testContainer.appendChild(moduleDiv);

    // 监听答案变化，更新按钮状态
    const inputs = moduleDiv.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            if (index < testData.length - 1) {
                const nextButton = buttonDiv.querySelector('button:nth-child(2)');
                nextButton.disabled = !isModuleCompleted(index);
            } else {
                const submitButton = buttonDiv.querySelector('button');
                submitButton.disabled = !isModuleCompleted(index);
            }
        });
    });
}

function isModuleCompleted(index) {
    const module = testData[index];
    for (let i = 0; i < module.questions.length; i++) {
        const inputs = document.querySelectorAll(`input[name="module${index}q${i}"]:checked`);
        if (inputs.length === 0) {
            return false;
        }
        userAnswers[index][i] = inputs[0].value;
    }
    return true;
}

function goToModule(index) {
    if (isModuleCompleted(currentModuleIndex)) {
        currentModuleIndex = index;
        renderModule(currentModuleIndex);
    }
}

function calculateResults() {
    // 保存所有答案
    for (let i = 0; i < testData.length; i++) {
        isModuleCompleted(i);
    }

    // 计算各维度得分
    const dimensionScores = testData.map((module, mIndex) => {
        let totalScore = 0;
        module.questions.forEach((question, qIndex) => {
            const option = userAnswers[mIndex][qIndex];
            const baseScore = optionScores[question.type][option];
            totalScore += baseScore * question.weight;
        });
        return (totalScore / dimensionMaxScores[mIndex]) * 100;
    });

    // 计算综合得分
    let overallScore = 0;
    dimensionScores.forEach((score, index) => {
        overallScore += score * dimensionWeights[index];
    });

    // 计算雷达图分数
    const radarScores = dimensionScores.map(score => Math.floor(score) / 100 * 5);

    // 显示结果
    showResults(overallScore, dimensionScores, radarScores);
}

function showResults(overallScore, dimensionScores, radarScores) {
    document.getElementById('test-container').style.display = 'none';
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    let scoresHtml = `<p>综合得分: ${Math.floor(overallScore)} 分</p>`;
    testData.forEach((module, index) => {
        scoresHtml += `<p>${module.title}: ${Math.floor(dimensionScores[index])} 分，权重: ${radarScores[index].toFixed(1)}</p>`;
    });
    document.getElementById('scores').innerHTML = scoresHtml;

    // 绘制雷达图
    drawRadarChart(radarScores);
}

function drawRadarChart(scores) {
    const labels = testData.map(module => module.title.split('（')[0]);
    const ctx = document.createElement('canvas');
    document.getElementById('radar-chart').appendChild(ctx);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '能力值五维表',
                data: scores,
                backgroundColor: 'rgba(255, 0, 0, 0.25)',
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: { stepSize: 1 }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '能力值五维表',
                    font: { size: 15 }
                }
            }
        }
    });
}